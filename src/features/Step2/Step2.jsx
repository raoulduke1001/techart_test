import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectHeight, setHeight} from '../../appSlice';
import styles from './Step2.module.css';

export function Step2() {
    const dispatch = useDispatch();
    const height = useSelector(selectHeight);

    return (
        <div >
            <h5>Шаг 2</h5>
            <div className={styles.center}>
            <table>
                <tbody>
                <tr>
                    <th className={styles.grey}><h6>Количество этажей(число):</h6></th>
                </tr>
                <tr>
                    <th><input value={height} type="text" onChange={e => dispatch(setHeight(Number(e.target.value)))}/>
                    </th>
                </tr>
                </tbody>
            </table>
            </div>

        </div>
    );
}
