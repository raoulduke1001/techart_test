import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';

import {
    selectAppState,
    selectResult,
    selectStep,
    setNextStep,
    setReset,
    setResult,
} from "./appSlice";
import {Step1} from "./features/Step1/Step1";
import {Step2} from "./features/Step2/Step2";
import {Step3} from "./features/Step3/Step3";
import {Step4} from "./features/Step4/Step4";
import {ViewResult} from "./features/ViewResult/ViewResult";


function App() {
    const dispatch = useDispatch();
    const step = useSelector(selectStep);
    const appState = useSelector(selectAppState)
    const result = useSelector(selectResult)

    return (
        <div>
            <h1>Калькулятор цены конструкций</h1>
            <div>
                {step === 1 && <Step1/>}
                {step === 2 && <Step2/>}
                {step === 3 && <Step3/>}
                {step === 4 &&  result===null && <Step4/>}
                {result && <ViewResult/>}
            </div>
            {<button onClick={() => dispatch(setReset())}>{result ? "новый расчет" : "отмена"}</button>}

            {
                step === 4 ?
                    (!result && <button onClick={() => {
                        let reqURL = `https://data.techart.ru/lab/json/?building=${appState.building}&height=${appState.height}&material=${appState.material}&sizex=${appState.sizeX}&sizey=${appState.sizeY}`;
                        fetch(reqURL)
                            .then(res => res.json())
                            .then(
                                (response) => {
                                    dispatch(setResult(response))
                                },
                                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                                (error) => {
                                    console.log(error)
                                }
                            )
                    }}>Рассчитать</button>)
                    :
                    <button onClick={() => dispatch(setNextStep())}>Далее</button>
            }
        </div>
    );
}

export default App;
