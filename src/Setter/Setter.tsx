import React, {ChangeEvent, useState} from 'react';
import classes from '../Counter/Counter.module.css'
import Values from "./Values/Values";

type SetterPropsType = {
    setToLocalStorage: () => void
    maxValue: number
    minValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
}

const Setter = (props: SetterPropsType) => {

    return (

        <div className={classes.wrapper}>
            <div className={classes.counter}>
                <Values
                    maxValue={props.maxValue}
                    minValue={props.minValue}
                    setMinValue={props.setMinValue}
                    setMaxValue={props.setMaxValue}
                />
            </div>
            <div className={classes.buttons}>
                <button className={classes.setButton} onClick={props.setToLocalStorage}>set</button>
            </div>
        </div>
    );
};

export default Setter;