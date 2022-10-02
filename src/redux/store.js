import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./slices/calculatorSlices";

export const store = configureStore ({
  reducer: {
    calculator: calculatorReducer,
  }
});
