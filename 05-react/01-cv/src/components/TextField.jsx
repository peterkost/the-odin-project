import "../styles/TextField.css";

const TextField = ({ type = "text", label, onChange, value, ...props }) => {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label>
      {type === "textarea" ? (
        <textarea
          name={label}
          id={label}
          value={value}
          onChange={handleChange}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={label}
          id={label}
          value={value}
          onChange={handleChange}
          {...props}
        />
      )}
    </div>
  );
};

export default TextField;
