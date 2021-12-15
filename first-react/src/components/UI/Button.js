import React from "react";

import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"} //button type is the type passed through in the prop, or 'button' by default
      onClick={props.onClick} //when clicked, use the onClick function from the prop
    >
      {props.children}
      {/*the text in the button determined by what is passed through the prop (Add User)*/}
    </button>
  );
};

export default Button;
