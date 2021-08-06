import React from "react";
import classes from "./btn.module.css";
export const Btn = ({ text, click }) => {
    return (
        <button onClick={click} className={classes.wrapper}>
            {text}
        </button>
    );
};
