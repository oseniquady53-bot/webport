/**
 * ============================================================================
 * ENTER THE DUSST VXRSE — GOOGLE APPS SCRIPT BACKEND ENDPOINT
 * ============================================================================
 * Free, zero-maintenance backend for:
 * 1. The Sanctum Waitlist Submissions
 * 2. Contact & Booking Inquiries
 * 3. Instant Email Notifications to the Artist & Creator
 * 
 * SETUP INSTRUCTIONS (Takes ~2 minutes):
 * ---------------------------------------
 * 1. Open Google Sheets (https://sheets.google.com) and create a new sheet:
 *    "DussT - Enter The Duss Vxrse Inquiries"
 * 2. In Google Sheets, click: Extensions -> Apps Script
 * 3. Delete any default code, paste this ENTIRE file into the editor, and click Save.
 * 4. Update the NOTIFICATION_EMAILS array below with DussT's and Quady's emails.
 * 5. Click "Deploy" (blue button top-right) -> "New deployment"
 * 6. Select Type: "Web app"
 *    - Description: "DussT Website Backend"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (Required so your website forms can submit)
 * 7. Click "Deploy" and authorize access.
 * 8. Copy the Web App URL (e.g. https://script.google.com/macros/s/.../exec).
 * 9. Paste that URL into the form action or js/content-config.js.
 * ============================================================================
 */

// Configure notification recipients here:
const NOTIFICATION_EMAILS = [
  "info@EnterTheDussVxrse.com", // Artist official mailbox
  "oseniquady53@gmail.com"      // Creator backup dispatch
];

function doPost(e) {
  try {
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    let data = {};

    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    const type = data.formType || (data.role ? "Sanctum Waitlist" : "Booking Inquiry");
    const timestamp = new Date();

    if (type === "Sanctum Waitlist") {
      let waitlistTab = sheet.getSheetByName("Sanctum Waitlist");
      if (!waitlistTab) {
        waitlistTab = sheet.insertSheet("Sanctum Waitlist");
        waitlistTab.appendRow(["Timestamp", "Full Name", "Email Address", "Primary Role", "Genre / Discipline", "Personal Statement"]);
        waitlistTab.setFrozenRows(1);
      }
      waitlistTab.appendRow([
        timestamp,
        data.fullName || "N/A",
        data.email || "N/A",
        data.role || "N/A",
        data.genre || "N/A",
        data.notes || "N/A"
      ]);

      // Notify
      const emailBody = `✦ New Sanctum Waitlist Registration:\n\n` +
        `Name: ${data.fullName}\n` +
        `Email: ${data.email}\n` +
        `Role: ${data.role}\n` +
        `Genre: ${data.genre}\n` +
        `Statement: ${data.notes}\n\n` +
        `Recorded on: ${timestamp.toISOString()}`;
      
      NOTIFICATION_EMAILS.forEach(to => {
        try {
          MailApp.sendEmail(to, `[The Sanctum] New Waitlist: ${data.fullName} (${data.role})`, emailBody);
        } catch(e) {}
      });

    } else {
      // General Contact or Booking Inquiry
      let contactTab = sheet.getSheetByName("Contact Inquiries");
      if (!contactTab) {
        contactTab = sheet.insertSheet("Contact Inquiries");
        contactTab.appendRow(["Timestamp", "Contact Name", "Email Address", "Subject / Category", "Message Details"]);
        contactTab.setFrozenRows(1);
      }
      contactTab.appendRow([
        timestamp,
        data.contactName || data.name || "N/A",
        data.contactEmail || data.email || "N/A",
        data.subject || "General",
        data.message || "N/A"
      ]);

      // Notify
      const emailBody = `✦ New Booking / Contact Inquiry Transmitted via EnterTheDussVxrse.com:\n\n` +
        `From: ${data.contactName || data.name}\n` +
        `Email: ${data.contactEmail || data.email}\n` +
        `Subject: ${data.subject}\n\n` +
        `Message:\n${data.message}\n\n` +
        `Timestamp: ${timestamp.toISOString()}`;

      NOTIFICATION_EMAILS.forEach(to => {
        try {
          MailApp.sendEmail(to, `[Duss Vxrse Dispatch] ${data.subject} from ${data.contactName || data.name}`, emailBody);
        } catch(e) {}
      });
    }

    lock.releaseLock();

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Submission recorded successfully."
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
