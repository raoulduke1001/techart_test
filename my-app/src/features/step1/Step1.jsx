import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setBuilding, setNextStep, selectBuilding} from '../../appSlice';
import styles from './Step1.module.css';

export function Step1() {
    const dispatch = useDispatch();
    const building = useSelector(selectBuilding);

    return (
        <div className={styles.Step1}>
            <div>Шаг1</div>
            <div>Что будем строить</div>
            <div>
                <ul>
                    <li className={building === 1 ? styles.selected : ''} onClick={() => {
                        dispatch(setBuilding(1))
                        dispatch(setNextStep())
                    }}>Жилой дом</li>
                    <li className={building === 2 ? styles.selected : ''} onClick={() => {
                        dispatch(setBuilding(2))
                        dispatch(setNextStep())
                    }}>Гараж</li>
                </ul>
            </div>
        </div>
    );
}
