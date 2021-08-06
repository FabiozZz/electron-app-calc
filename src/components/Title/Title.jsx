import React from "react";
import classes from './title.module.css';
export const Title = ({ children }) => {
    return <p className={classes.title}>{children}</p>;
};
