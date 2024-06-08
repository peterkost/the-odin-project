import AddButtons from "./AddButtons";
import TextField from "./TextField";

const EducationInputs = ({
  editing,
  onAdd,
  onDelete,
  isLast,
  isOnly,
  inputId,
}) => {
  const deleteSelf = () => onDelete(inputId);

  return (
    <>
      <div className="two-col">
        <TextField label="School" disabled={!editing} />
        <TextField label="Degree" disabled={!editing} />
        <TextField label="Start" type="date" disabled={!editing} />
        <TextField label="End" type="date" disabled={!editing} />
      </div>
      <AddButtons
        editing={editing}
        onAdd={onAdd}
        onDelete={deleteSelf}
        isLast={isLast}
        isOnly={isOnly}
      />
    </>
  );
};

export default EducationInputs;
