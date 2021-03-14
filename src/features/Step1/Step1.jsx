import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setBuilding, setNextStep, selectBuilding} from '../../appSlice';
import styles from './Step1.module.css';

export function Step1() {
    const dispatch = useDispatch();
    const building = useSelector(selectBuilding);

    return (
        <div>
            <h5>Шаг 1</h5>
            <div className={styles.center}>
                <table>
                    <tbody>
                <tr>
                    <th className={styles.grey}><h6>Что будем строить</h6></th>
                </tr>
                <tr>
                    <th ><ul>
                        <li className={building === 1 ? styles.selected : ''} onClick={() => {
                            dispatch(setBuilding(1))
                            dispatch(setNextStep())
                        }}>Жилой дом</li>
                        <li className={building === 2 ? styles.selected : ''} onClick={() => {
                            dispatch(setBuilding(2))
                            dispatch(setNextStep())
                        }}>Гараж</li> </ul> </th >
                </tr>
                    </tbody>
            </table>


            </div>
        </div>
    );
}
