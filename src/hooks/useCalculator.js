import { useDispatch, useSelector } from "react-redux";
import { addNumber, result, clear } from "../redux/slices/calculatorSlices";

const useCalculator = () => {
  const number = useSelector((state) => state.calculator.number);
  const dispatch = useDispatch();

  function handleChange(numero) {
    dispatch(addNumber(numero));
  }

  function handleClear() {
    dispatch(clear());
  }

  function handleResult() {
    dispatch(result());
  }

  return [handleChange, handleClear, handleResult, number];
};

export default useCalculator;