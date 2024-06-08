import "../styles/TextField.css";

const TextField = ({ type = "text", label }) => (
  <div className="input-container">
    <label htmlFor={label}>{label}</label>
    {type === "textarea" ? (
      <textarea name={label} id={label} />
    ) : (
      <input type={type} name={label} id={label} />
    )}
  </div>
);

export default TextField;
