const AddButtons = ({ editing, onAdd, onDelete, isLast, isOnly }) => {
  return (
    <>
      {editing && (
        <div className="justify-right gap">
          {!isOnly && (
            <button type="button" onClick={onDelete}>
              Delete ❌
            </button>
          )}
          {isLast && (
            <button type="button" onClick={onAdd}>
              Add ➕
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default AddButtons;
