import "./footer.css";
import html from "./footer.html";

const setFooter = () => {
  const container = document.getElementsByTagName("footer")[0];
  container.innerHTML = html;
};

export { setFooter };
