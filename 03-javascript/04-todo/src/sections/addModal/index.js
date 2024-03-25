import html from "./index.html";

const addModal = () => {
  const modal = document.createElement("dialog");
  modal.id = "add-modal";
  modal.innerHTML = html;
  return modal;
};

export default addModal;
