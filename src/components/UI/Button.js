const Button = (props) => {
  const classes = `${props.className || ""}`;
  return (
    <button
      className={classes}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
