import "../styles/ModeButton.css";
const ModeButton = ({ editing, onClick }) => (
  <button type="button" id="mode-button" onClick={onClick}>
    {editing ? "Save ✅" : "Edit ✏️"}
  </button>
);

export default ModeButton;
