import React from "react";
import { Btn } from "../Btn/Btn";
import { Title } from "../Title/Title";
import classes from './one.module.css';

export const StepOne = () => {
    return (
        <>
            <Title text={"Калькулятор"} />
            <div className={classes.step_one_form}>
                <p>Выбери тариф нажав на кнопку ниже или жмякай на обе</p>
                <Btn text={"Тариф х3"} />
                <Btn text={"Тариф х4"} />
            </div>
        </>
    );
};
