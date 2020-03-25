import React from "react";
import "./Button.scss";

const Button = ({ name, color, textColor, size }) => {
  const styles = {
    button: {
      backgroundColor: color,
      color: textColor,
      cursor: "pointer"
    },
    verbs: {
      padding: "0.2em 1em",
      fontSize: "1em",
      borderRadius: "25px"
    },
    nextOrCancelOrSave: {
      padding: "0.3em 1.3em",
      fontSize: "1.2em",
      borderRadius: "25px"
    },
    plus: {
      padding: "0.02em 1em",
      fontSize: "3.5em",
      borderRadius: "14px"
    },
    yellowButton: {
      padding: "0.4em 1.5em",
      fontSize: "1.6em",
      borderRadius: "7px"
    }
  };

  return (
    <button className="button" style={{ ...styles[size], ...styles.button }}>
      {name}
    </button>
  );
};

export default Button;
