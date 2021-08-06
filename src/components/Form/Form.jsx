import React, { useContext } from "react";
import { Context } from "../../App";
import { Input } from "../Input/Input";
import { BtnSwitch } from "./BtnSwitch/BtnSwitch";
import classes from "./form.module.css";
export const Form = () => {
    const { tarif, countX3, countX4, countEditor, onChange, toggle } =
        useContext(Context);

    return (
        <div className={classes.wrapper}>
            <div className={classes.firstSwitch}>
                <BtnSwitch
                    name={"x3"}
                    click={toggle}
                    text={"Тариф х3"}
                    active={tarif.x3}
                />
            </div>
            <div className={classes.secondSwitch}>
                <BtnSwitch
                    name={"x4"}
                    click={toggle}
                    text={"Тариф х4"}
                    active={tarif.x4}
                />
            </div>
            {tarif.x3 && (
                <div className={classes.inputLeft}>
                    <Input
                        onChange={onChange}
                        name={"countX3"}
                        placeholder={"Количество статей тариф x3:"}
                        value={countX3}
                    />
                </div>
            )}
            {tarif.x4 && (
                <div className={classes.inputRight}>
                    <Input
                        onChange={onChange}
                        name={"countX4"}
                        placeholder={"Количество статей тариф x4:"}
                        value={countX4}
                    />
                </div>
            )}
            {(tarif.x4 || tarif.x3) && (
                <div className={classes.inputLeft}>
                    <Input
                        onChange={onChange}
                        name={"countEditor"}
                        placeholder={"Количество сотрудников:"}
                        value={countEditor}
                    />
                </div>
            )}
        </div>
    );
};
