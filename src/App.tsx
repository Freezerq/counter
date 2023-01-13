import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Setter from "./Setter/Setter";

function App() {

    const [isIncDisabled, setIncDisabled] = useState(false)
    const [isResetDisabled, setResetDisabled] = useState(true)
    const counterMinValue = Number(localStorage.getItem('minValue'))
    const [counter, setCounter] = useState(counterMinValue)


    const onClickReset = () => {
        setCounter(counterMinValue)
        setResetDisabled(true)
        setIncDisabled(false)
    }

    const onClickInc = () => {
        if (counter < maxValueLS) {
            setCounter(counter + 1)
            if (counter === maxValueLS - 1) {
                setIncDisabled(true)
            }
        }
        setResetDisabled(false)
    }

    const minValueLS = Number(localStorage.getItem('minValue'))
    const maxValueLS = Number(localStorage.getItem('maxValue'))
    const [minValue, setMinValue] = useState(minValueLS);
    const [maxValue, setMaxValue] = useState(maxValueLS);

    const setToLocalStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        let storageChanged = Number(localStorage.getItem('minValue'))
        setCounter(storageChanged)
    }

    return (
        <div className="App">
            <Setter minValue={minValue} setMinValue={setMinValue} setMaxValue={setMaxValue} maxValue={maxValue} setToLocalStorage={setToLocalStorage}/>
            <Counter
                onClickReset={onClickReset}
                onClickInc={onClickInc}
                counter={counter}
                counterMinValue={counterMinValue}
                isResetDisabled={isResetDisabled}
                isIncDisabled={isIncDisabled}
            />
        </div>
    );
}

export default App;
