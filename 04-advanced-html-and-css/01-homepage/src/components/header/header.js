import "./header.css";
import html from "./header.html";

const setHeader = () => {
  const container = document.getElementsByTagName("header")[0];
  container.innerHTML = html;
};

export { setHeader };
