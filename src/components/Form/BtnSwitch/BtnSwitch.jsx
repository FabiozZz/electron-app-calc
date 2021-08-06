import React from 'react';
import classes from './switch.module.css';
import cn from 'classnames';

export const BtnSwitch = ({text,active,name,click}) => {
    return (
        <div data-name={name} onClick={(e)=>click(e,active)} className={cn(classes.wrapper,{[classes.active]:active},{[classes.noActive]:!active})}>
            {text}
        </div>
    );
};
