import AddButtons from "./AddButtons";
import TextField from "./TextField";

const ExperienceInputs = ({ onDelete, editing, inputId, ...buttonProps }) => {
  const deleteSelf = () => onDelete(inputId);

  return (
    <>
      <div className="two-col">
        <TextField label="Company" disabled={!editing} />
        <TextField label="Title" disabled={!editing} />
        <TextField label="Start" type="date" disabled={!editing} />
        <TextField label="End" type="date" disabled={!editing} />
      </div>
      <TextField
        className="experience-text-area"
        label="Responsibilities"
        type="textarea"
        disabled={!editing}
      />
      <AddButtons onDelete={deleteSelf} editing={editing} {...buttonProps} />
    </>
  );
};

export default ExperienceInputs;
