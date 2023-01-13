import React, {useState} from 'react';
import classes from './Counter.module.css'
import ButtonCounter from "../Button/ButtonCounter";


type CounterPropsType = {
    isIncDisabled: boolean
    isResetDisabled: boolean
    counterMinValue: number
    counter: number
    onClickReset: () => void
    onClickInc: () => void
}

const Counter = (props: CounterPropsType) => {


    //const finalCounterClassName = props.counter > 4 ? classes.numberRed : classes.number


    return (
        <div className={classes.wrapper}>
            <div className={classes.counter}>
                <div className={'finalCounterClassName'}>{props.counter}</div>
            </div>
            <div className={classes.buttons}>
                <ButtonCounter classname={classes.incButton} onClickInc={props.onClickInc} isIncDisabled={props.isIncDisabled}
                               title={'inc'}/>
                <ButtonCounter classname={classes.resetButton} onClickInc={props.onClickReset} isIncDisabled={props.isResetDisabled}
                               title={'reset'}/>
            </div>
        </div>
    );
};

export default Counter;