import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDivide,
  faMultiply,
  faPlus,
  faMinus,
  faEquals,
} from "@fortawesome/free-solid-svg-icons";
import { useCalculator } from "../hooks/useCalculator";

const CalculadoraBody = () => {
  const [handleChange, handleClear, handleResult, value] = useCalculator();

  return (
    <div className="container">
      <div className="calculator-wrapper">
      <div className="row justify-content-md-center">
        <div className="col-12">
          <h1 className="text-center text-light">Calculadora</h1>
        </div>
      </div>

      <div className="row justify-content d-flex h-3 ">
        <div className="col">
          <h1 className="bg-dark text-white text-end">{value} </h1>
        </div>
      </div>
      <br />

      <div className="row justify-content-center d-flex h-3 p-10 fs-1 mb-2">
        <div className="col col-md-auto">
          <button className="btn btn-light" value={7} onClick={handleChange}>
            7
          </button>
        </div>
        <div className="col col-md-auto">
          <button className="btn btn-light" value={8} onClick={handleChange}>
            8
          </button>
        </div>
        <div className="col col-md-auto">
          <button className="btn btn-light" value={9} onClick={handleChange}>
            9
          </button>
        </div>
        <div className="col col-md-auto">
          <button
            className="btn btn-secondary"
            value="/"
            onClick={handleChange}
          >
            <FontAwesomeIcon icon={faDivide} />
          </button>
        </div>
      </div>
      <div className="row justify-content-center d-flex h-3 p-10 fs-1 mb-2">
        <div className="col col-md-auto">
          <button className="btn btn-light" value={4} onClick={handleChange}>
            4
          </button>
        </div>
        <div className="col col-md-auto">
          <button className="btn btn-light" value={5} onClick={handleChange}>
            5
          </button>
        </div>
        <div className="col col-md-auto">
          <button className="btn btn-light" value={6} onClick={handleChange}>
            6
          </button>
        </div>
        <div className="col col-md-auto">
          <button
            className="btn btn-secondary"
            value="*"
            onClick={handleChange}
          >
            <FontAwesomeIcon icon={faMultiply} />
          </button>
        </div>
      </div>
      <div className="row justify-content-center d-flex h-3 p-10 fs-1">
        <div className="col col-md-auto">
          <button className="btn btn-light" value={1} onClick={handleChange}>
            1
          </button>
        </div>
        <div className="col col-md-auto">
          <button className="btn btn-light" value={2} onClick={handleChange}>
            2
          </button>
        </div>
        <div className="col col-md-auto">
          <button className="btn btn-light" value={3} onClick={handleChange}>
            3
          </button>
        </div>
        <div className="col col-md-auto">
          <button
            className="btn btn-secondary"
            value="+"
            onClick={handleChange}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div className="row justify-content-center d-flex h-3 p-10 fs-1 mb-2">
        <div className="col col-md-auto">
          <button className="btn btn-light" value={0} onClick={handleChange}>
            0
          </button>
        </div>
        <div className="col col-md-auto">
          <button className="btn btn-secondary" onClick={handleClear}>
            C
          </button>
        </div>
        <div className="col col-md-auto">
          <button className="btn btn-secondary" onClick={handleResult}>
            <FontAwesomeIcon icon={faEquals} />
          </button>
        </div>
        <div className="col col-md-auto">
          <button
            className="btn btn-secondary"
            value="-"
            onClick={handleChange}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>

      </div>
    </div>
  );
};

export default CalculadoraBody;
