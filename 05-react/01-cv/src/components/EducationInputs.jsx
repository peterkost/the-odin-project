import AddButtons from "./AddButtons";
import TextField from "./TextField";

const EducationInputs = ({ onDelete, editing, inputId, ...buttonProps }) => {
  const deleteSelf = () => onDelete(inputId);

  return (
    <>
      <div className="two-col">
        <TextField label="School" disabled={!editing} />
        <TextField label="Degree" disabled={!editing} />
        <TextField label="Start" type="date" disabled={!editing} />
        <TextField label="End" type="date" disabled={!editing} />
      </div>
      <AddButtons onDelete={deleteSelf} editing={editing} {...buttonProps} />
    </>
  );
};

export default EducationInputs;
