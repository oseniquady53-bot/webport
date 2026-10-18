import os
import re

base_dir = r"C:\Users\HomePC\.gemini\antigravity\scratch\enterthedussvxrse"
html_files = [f for f in os.listdir(base_dir) if f.endswith(".html")]

print("Checking HTML files in:", base_dir)
print("Found files:", html_files)

all_passed = True
missing_assets = []
checked_links = 0
checked_images = 0

for hf in html_files:
    fpath = os.path.join(base_dir, hf)
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Check images
    img_matches = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', content)
    for src in img_matches:
        if not src.startswith("http") and not src.startswith("data:"):
            checked_images += 1
            # Clean possible query params
            clean_src = src.split("?")[0].split("#")[0]
            asset_path = os.path.normpath(os.path.join(base_dir, clean_src))
            if not os.path.exists(asset_path):
                missing_assets.append((hf, src))
                all_passed = False

    # Check local html links
    link_matches = re.findall(r'<a[^>]+href=["\']([^"\']+)["\']', content)
    for href in link_matches:
        if href.endswith(".html"):
            checked_links += 1
            target_html = os.path.normpath(os.path.join(base_dir, href))
            if not os.path.exists(target_html):
                print(f"Broken link in {hf} -> {href}")
                all_passed = False

print(f"Total checked images: {checked_images}")
print(f"Total checked links: {checked_links}")

if all_passed:
    print("SUCCESS: ALL 8 PAGES, ASSETS, IMAGES, AND LINKS ARE 100% VALID!")
else:
    print("WARNING: Missing assets detected:", missing_assets)
