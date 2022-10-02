import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: 0, //status: "idle",
};

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        addNumber: (state, action) => {
            state.number += action.payload;
        },
        result: (state) => {
            state.number = eval(state.number);
        },
        clear: (state) => {
            state.number = 0;
        }
    }
});

export const { addNumber, result, clear } = calculatorSlice.actions;

//export const selectNumber = (state) => state.calculator.number;
export default calculatorSlice.reducer;