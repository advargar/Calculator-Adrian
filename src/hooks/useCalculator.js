import { useState } from "react"


export const useCalculator = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) =>{
      setValue( value + e.target.value);
    }

    const handleClear = () => {
      setValue('');
    }

    const handleResult = () => {
      try {
        setValue(eval(value));
      } catch (error) {
        setValue('Error');
      }
    }


  return [ handleChange, handleClear, handleResult, value ];
}
