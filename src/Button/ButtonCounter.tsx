import React from 'react';
import classes from "../Counter/Counter.module.css";


type ButtonCounterPropsType = {
    isIncDisabled: boolean
    onClickInc: () => void
    classname: string
    title: string
}


export const ButtonCounter = (props: ButtonCounterPropsType) => {
    return (
        <>
            <button className={props.classname} onClick={props.onClickInc} disabled={props.isIncDisabled}>{props.title}</button>
        </>
    );
};

export default ButtonCounter;