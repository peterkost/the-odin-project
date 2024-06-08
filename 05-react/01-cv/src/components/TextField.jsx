import "../styles/TextField.css";

const TextField = ({ type = "text", label, ...props }) => {
  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label>
      {type === "textarea" ? (
        <textarea name={label} id={label} {...props} />
      ) : (
        <input type={type} name={label} id={label} {...props} />
      )}
    </div>
  );
};

export default TextField;
