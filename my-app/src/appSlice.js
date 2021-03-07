import {createSlice} from '@reduxjs/toolkit';

const defaultState = {
    building: 1,
    height: 1,
    material: null,
    sizeX: 1,
    sizeY: 1,
    step: 1,
};
export const appSlice = createSlice({
    name: 'app',
    initialState: defaultState,
    reducers: {
        setBuilding: (state, action) => {
            state.building = action.payload;
        },
        setHeight: (state, action) => {
            state.height = action.payload;
        },
        setMaterial: (state, action) => {
            state.material = action.payload;
        },
        setSizeX: (state, action) => {
            state.sizeX = action.payload;
        },
        setSizeY: (state, action) => {
            state.sizeY = action.payload;
        },
        setNextStep: (state,) => {
            if (state.step === 1 && state.building === 2) {
                state.material = 2;
                state.step = 3;
            } else {
                const nextStep = state.step + 1;
                if (nextStep === 3) {
                    state.material = 1;
                }
                state.step = nextStep;
            }
        },
        setReset: state => {
            Object.assign(state, defaultState);
        },
    },
});

export const {
    setBuilding,
    setMaterial,
    setHeight,
    setSizeX,
    setSizeY,
    setNextStep,
    setReset
} = appSlice.actions;

export const setCalculate = appState => dispatch => {
    fetch(`https://data.techart.ru/lab/json/?building=${appState.building}&height=${appState.height}&material=${appState.material}&sizex=${appState.sizeX}&sizey=${appState.sizeY}`)
        .then(res => res.json())
        .then(
            (result) => {
                dispatch(setViewResult(result))
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
                dispatch(setViewError(error))
            }
        )
};

export const selectBuilding = state => state.app.building;
export const selectHeight = state => state.app.height;
export const selectMaterial = state => state.app.material;
export const selectSizeX = state => state.app.sizeX;
export const selectSizeY = state => state.app.sizeY;
export const selectStep = state => state.app.step;
export const selectAppState = state => state.app;

export default appSlice.reducer;
