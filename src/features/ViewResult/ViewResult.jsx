import React from "react";
import styles from './viewResult.module.css'
import {useSelector} from 'react-redux';
import {selectResult} from "../../appSlice";


export  function ViewResult() {
    const result = useSelector(selectResult)
    return (
        <div className={styles.viewResult}>
            <div>
                Результат расчета
            </div>
            <div>{result.result === 'ok' ? (<div> Успешно </div>) :  (<div> Ошибка </div>)}
                {result.message}
            </div>
        </div>
    )
}