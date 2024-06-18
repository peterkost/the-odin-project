import PropTypes from "prop-types";

const AddToCartButton = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Add to Cart
  </button>
);

AddToCartButton.propTypes = {
  handleClick: PropTypes.func,
};

export default AddToCartButton;
