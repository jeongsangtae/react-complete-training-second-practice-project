import React, { useState } from "react";

const CalculatorForm = (props) => {
  // const [calculateValue, setCalculateValue] = useState();
  const [currentSaveValue, setCurrentSaveValue] = useState("");
  const [yearlyContributionValue, setyearlyContributionValue] = useState("");
  const [expectedReturnValue, setExpectedReturnValue] = useState("");
  const [durationValue, setDurationValue] = useState("");

  const currentSaveHandler = (event) => {
    setCurrentSaveValue(event.target.value);
  };

  const yearlyContributionHandler = (event) => {
    setyearlyContributionValue(event.target.value);
  };

  const expectedReturnHandler = (event) => {
    setExpectedReturnValue(event.target.value);
  };

  const durationHandler = (event) => {
    setDurationValue(event.target.value);
  };

  const resetEventHandler = () => {
    setCurrentSaveValue("");
    setyearlyContributionValue("");
    setExpectedReturnValue("");
    setDurationValue("");
  };

  const formSubmitEventHandler = (event) => {
    event.preventDefault();

    const calculateData = {
      currentSaveObject: currentSaveValue,
      yearlyContributionObject: yearlyContributionValue,
      expectedReturn: expectedReturnValue,
      duration: durationValue,
    };

    // setCalculateValue();
    props.onSaveCalculateData(calculateData);
  };

  return (
    <form className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSaveHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlyContributionHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedReturnHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={durationHandler} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetEventHandler}>
          Reset
        </button>
        <button
          type="submit"
          className="button"
          onClick={formSubmitEventHandler}
        >
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;
