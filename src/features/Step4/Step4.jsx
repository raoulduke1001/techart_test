import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectSizeX, selectSizeY, setSizeX, setSizeY} from '../../appSlice';
import styles from './Step4.module.css';

export function Step4() {
    const dispatch = useDispatch();
    const sizeX = useSelector(selectSizeX);
    const sizeY = useSelector(selectSizeY);

    return (
        <div>
            <h5>Шаг 4</h5>
            <div className={styles.center}>
                <table>
                    <tbody>
                    <tr>
                        <th className={styles.grey}><h6>Длина стен(в метрах)</h6></th>
                    </tr>
                    <tr>
                        <th>
                            <input size={4} value={sizeX} type="text"
                                   onChange={e => dispatch(setSizeX(Number(e.target.value)))}/>
                            X
                            <input size={4} value={sizeY} type="text"
                                   onChange={e => dispatch(setSizeY(Number(e.target.value)))}/>
                        </th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
