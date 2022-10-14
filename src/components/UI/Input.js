const Input = (props) => {
  const classes = `input ${props.className || ""}`;
  return (
    <div className="form-group">
      <label className="input_label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        id={props.id}
        name={props.name}
        className={classes}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        type={props.type || "text"}
      />
    </div>
  );
};

export default Input;
