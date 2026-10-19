import os
import sys
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

class RangeHTTPRequestHandler(SimpleHTTPRequestHandler):
    """HTTP Request Handler with HTTP Range support for seamless video/audio streaming."""
    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def copyfile(self, source, outputfile):
        """Wrap copyfile to silently handle client disconnects during video streaming."""
        try:
            super().copyfile(source, outputfile)
        except (ConnectionResetError, BrokenPipeError, ConnectionAbortedError):
            pass

if __name__ == '__main__':
    port = 8080
    host = '0.0.0.0'
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    server = ThreadingHTTPServer((host, port), RangeHTTPRequestHandler)
    print(f"DussT Official Threaded Server running on http://{host}:{port}/")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        server.server_close()
