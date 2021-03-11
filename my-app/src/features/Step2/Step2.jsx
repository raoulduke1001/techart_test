import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectHeight, setHeight} from '../../appSlice';
import styles from './Step2.module.css';

export function Step2() {
    const dispatch = useDispatch();
    const height = useSelector(selectHeight);

    return (
        <div className={styles.Step2}>
            <div>Шаг2</div>
            <div>Количество этажей</div>
            <div>
                <input value={height} type="text" onChange={e => dispatch(setHeight(Number(e.target.value)))}/>
            </div>
        </div>
    );
}
