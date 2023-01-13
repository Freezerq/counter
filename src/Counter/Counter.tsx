import React, {useState} from 'react';
import classes from './Counter.module.css'


type CounterPropsType = {
    counter: number
    setCounter: (value: number) => void
}



const Counter = (props: CounterPropsType) => {
    const [isIncDisabled, setIncDisabled] = useState(false)
    const [isResetDisabled, setResetDisabled] = useState(true)

    const onClickReset = () => {
        props.setCounter(0)
        setResetDisabled(true)
        setIncDisabled(false)
    }


    const onClickInc = () => {


        if (props.counter < 5) {
            props.setCounter(props.counter + 1)
            if (props.counter === 4) {
                setIncDisabled(true)
            }
        }
        setResetDisabled(false)
    }
    const finalCounterClassName = props.counter > 4 ?  classes.numberRed : classes.number
    return (
        <div className={classes.wrapper}>
            <div className={classes.counter}>
                <div className={finalCounterClassName}>{props.counter}</div>
            </div>
            <div className={classes.buttons}>
                <button className={classes.incButton} onClick={onClickInc} disabled={isIncDisabled}>inc</button>
                <button className={classes.resetButton} onClick={onClickReset} disabled={isResetDisabled}>reset</button>
            </div>
        </div>
    );
};

export default Counter;