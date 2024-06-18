import PropTypes from "prop-types";

const ManageQuantityButton = ({
  count,
  id,
  handleAddClick,
  handleRemoveClick,
  handleCountChange,
}) => (
  <div>
    <button type="button" onClick={handleAddClick}>
      +
    </button>
    <input
      type="number"
      name="quantity"
      id={id}
      value={count}
      onChange={handleCountChange}
    />
    <button type="button" onClick={handleRemoveClick}>
      -
    </button>
  </div>
);

ManageQuantityButton.propTypes = {
  count: PropTypes.number,
  id: PropTypes.number,
  handleAddClick: PropTypes.func,
  handleRemoveClick: PropTypes.func,
  handleCountChange: PropTypes.func,
};

export default ManageQuantityButton;
