import { createServer } from "http";
import { URL } from "url";

const INDEX_ROUTE = "/";
const ABOUT_ROUTE = "/about";
const CONTACT_ROUTE = "/contact-me";

createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`).pathname;

  res.writeHead(200, { "Content-Type": "text/plain" });

  switch (reqUrl) {
    case INDEX_ROUTE:
      res.end("INDEX");
      return;
    case ABOUT_ROUTE:
      res.end("ABOUT");
      return;
    case CONTACT_ROUTE:
      res.end("CONTACT");
      return;
    default:
      res.end("ERROR");
  }
}).listen(8080);
