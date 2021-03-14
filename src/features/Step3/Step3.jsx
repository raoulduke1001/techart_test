import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectBuilding, selectMaterial, setMaterial, setNextStep} from '../../appSlice';
import styles from './Step3.module.css';

export function Step3() {
    const dispatch = useDispatch();
    const building = useSelector(selectBuilding);
    const material = useSelector(selectMaterial);

    return (
        <div>
            <h5>Шаг 3</h5>
            <div className={styles.center}>

                <table><tbody><tr><th className={styles.grey}><h6>Выбор материала</h6></th></tr><tr><th>
                    <ul>
                        {building=== 1 && <li className={material === 1 ? styles.selected : ''} onClick={() => {
                            dispatch(setMaterial(1))
                            dispatch(setNextStep())
                        }}>Кирпич</li>}
                        <li className={material === 2 ? styles.selected : ''} onClick={() => {
                            dispatch(setMaterial(2))
                            dispatch(setNextStep())
                        }}>Шлакоблок</li>
                        {building=== 1 && <li className={material === 3 ? styles.selected : ''} onClick={() => {
                            dispatch(setMaterial(3))
                            dispatch(setNextStep())
                        }}>Деревянный брус</li>}
                        {building=== 2 && <li className={material === 4 ? styles.selected : ''} onClick={() => {
                            dispatch(setMaterial(4))
                            dispatch(setNextStep())
                        }}>Металл</li>}
                        {building=== 2 && <li className={material === 5 ? styles.selected : ''} onClick={() => {
                            dispatch(setMaterial(5))
                            dispatch(setNextStep())
                        }}>Сендвич-панель</li>}
                    </ul>


                </th></tr></tbody></table>

            </div>
        </div>
    );
}
