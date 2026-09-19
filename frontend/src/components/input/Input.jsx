import "./input.css";

const Input = ({ id, type = "text", error, textoLabel, ...props }) => {
  return (
    <div className="contenedor-input">
      <label htmlFor={id}>{textoLabel}</label>
      <input type={type} id={id} {...props} />
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;
