import React from "react";
import classes from "./Card.module.css"; //import the classes (selectors) from card.module.js

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      {/* the class(css selector) for this div will be .card from card.module.css */}
      {props.children}
      {/* access the items inside the opening
            and closing tags of the component when called */}
    </div>
  );
};

export default Card;
