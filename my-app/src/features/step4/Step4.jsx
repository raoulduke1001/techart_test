import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectSizeX, selectSizeY, setSizeX, setSizeY} from '../../appSlice';
import styles from './Step4.module.css';

export function Step4() {
    const dispatch = useDispatch();
    const sizeX = useSelector(selectSizeX);
    const sizeY = useSelector(selectSizeY);

    return (
        <div className={styles.Step4}>
            <div>Шаг 4</div>
            <div>Размеры</div>
            <div>
                <input value={sizeX} type="text" onChange={e => dispatch(setSizeX(Number(e.target.value)))}/>
                <input value={sizeY} type="text" onChange={e => dispatch(setSizeY(Number(e.target.value)))}/>
            </div>
        </div>
    );
}
