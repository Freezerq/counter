import React, {ChangeEvent, useState} from 'react';
import classes from "./Values.module.css";

type ValuesPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
}

const Values = (props: ValuesPropsType) => {

    const {minValue, maxValue} = {...props}


    const maxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
    }

    const minValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(Number(e.currentTarget.value))
    }

    return (
        <div className={classes.wrapper}>
            <div>
                <div style={{fontSize: '18px'}}>max value:</div>
                <div style={{fontSize: '18px'}}>start value:</div>
            </div>
            <div style={{marginLeft: '30px'}}>
                <input className={classes.input} type={"number"} value={maxValue} onChange={maxValueInputHandler}/>
                <input className={classes.input} type={"number"} value={minValue} onChange={minValueInputHandler}/>
            </div>
        </div>
    );
};

export default Values;