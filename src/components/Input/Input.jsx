import React from 'react'
import classes from './input.module.css'
export const Input = ({placeholder,value,onChange,name}) => {
    return (
        <div className={classes.wrapper}>
            <p>{placeholder}</p> <input value={value} name={name} onChange={onChange} type="number"/>
        </div>
    )
}
