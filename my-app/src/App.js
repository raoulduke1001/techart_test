import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';

import {selectAppState, selectStep, setCalculate, setNextStep, setReset} from "./appSlice";
import {Step1} from "./features/step1/Step1";
import {Step2} from "./features/step2/Step2";
import {Step3} from "./features/step3/Step3";
import {Step4} from "./features/step4/Step4";

function App() {
    const dispatch = useDispatch();
    const step = useSelector(selectStep);
    const appState = useSelector(selectAppState)
    const result = useSelector(selectResult)
    const error = useSelector(selectError)

    return (
        <div>
            <h1>Калькулятор цены конструкций</h1>
            <div>
                {step === 1 && <Step1/>}
                {step === 2 && <Step2/>}
                {step === 3 && <Step3/>}
                {step === 4 && <Step4/>}
                {result && <ViewResult/>}
                {error && <ViewError/>}
            </div>
            <button onClick={() => dispatch(setReset())}>Отмена</button>
            {
                step === 4 ?
                    <button onClick={() => dispatch(setCalculate(appState))}>Рассчитать</button>
                    :
                    <button onClick={() => dispatch(setNextStep())}>Далее</button>
            }
        </div>
    );
}

export default App;
