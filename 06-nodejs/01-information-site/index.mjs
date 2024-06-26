import { createServer } from "http";
import { URL } from "url";
import fs from "node:fs";

const INDEX_ROUTE = "/";
const ABOUT_ROUTE = "/about";
const CONTACT_ROUTE = "/contact-me";

const INDEX_HTML = fs.readFileSync("./pages/index.html");
const ABOUT_HTML = fs.readFileSync("./pages/about.html");
const CONTACT_HTML = fs.readFileSync("./pages/contact-me.html");
const ERROR_HTML = fs.readFileSync("./pages/404.html");

createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`).pathname;

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  switch (reqUrl) {
    case INDEX_ROUTE:
      res.end(INDEX_HTML);
      break;
    case ABOUT_ROUTE:
      res.end(ABOUT_HTML);
      break;
    case CONTACT_ROUTE:
      res.end(CONTACT_HTML);
      break;
    default:
      res.end(ERROR_HTML);
  }
}).listen(8080);
