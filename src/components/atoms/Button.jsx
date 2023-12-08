import React from "react";

const Button = (props) => {
  return (
    <Button
      className={props.classNameButton}
      type={props.typeButton}
      name={props.nameButton}
      onClick={props.onClickButton}
    >
      {props.children}
    </Button>
  );
};

export default Button;