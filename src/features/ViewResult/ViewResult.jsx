import React from "react";
import styles from './viewResult.module.css'
import {useSelector} from 'react-redux';
import {selectResult} from "../../appSlice";


export function ViewResult() {
    const result = useSelector(selectResult)
    return (
        <div>
            <h5>
                Результат расчета
            </h5>
            <div className={styles.center}>
            <table>
                <tbody>
                <tr>
                    <th className={styles.grey}><h6>{result.result === 'ok' ?  "Успешно"  :  "Ошибка" }</h6></th>
                </tr>
                <tr>
                    <th className={result.result === 'ok' ?  styles.blue  :  styles.red }>{result.message}</th>
                </tr>
                </tbody>
            </table>
        </div>
        </div>


    )
}