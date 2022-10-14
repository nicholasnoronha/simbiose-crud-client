const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        className={props.className || ""}
        onChange={props.onChange}
        value={props.value}
        type={props.type || "text"}
      />
    </>
  );
};

export default Input;
