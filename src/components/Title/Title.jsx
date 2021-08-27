import React from "react";
import classes from './title.module.css';
export const Title = ({text}) => {
    return <p className={classes.title}><span className={classes.backText}>{text}</span>{text}</p>;
};
