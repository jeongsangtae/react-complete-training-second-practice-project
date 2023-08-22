import React, { useState } from "react";

import styled from "./CalculatorForm.module.css";

const CalculatorForm = (props) => {
  // const [calculateValue, setCalculateValue] = useState();
  const [currentSaveValue, setCurrentSaveValue] = useState("");
  const [yearlyContributionValue, setyearlyContributionValue] = useState("");
  const [expectedReturnValue, setExpectedReturnValue] = useState("");
  const [durationValue, setDurationValue] = useState("");

  // const currentSaveHandler = (event) => {
  //   setCurrentSaveValue(event.target.value);
  // };

  // const yearlyContributionHandler = (event) => {
  //   setyearlyContributionValue(event.target.value);
  // };

  // const expectedReturnHandler = (event) => {
  //   setExpectedReturnValue(event.target.value);
  // };

  // const durationHandler = (event) => {
  //   setDurationValue(event.target.value);
  // };

  const inputChangeHandler = (input, value) => {
    console.log(input, value);
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
    setCurrentSaveValue("");
    setyearlyContributionValue("");
    setExpectedReturnValue("");
    setDurationValue("");
  };

  return (
    <form onSubmit={formSubmitEventHandler} className={styled.form}>
      <div className={styled["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          {/* <input
            type="number"
            id="current-savings"
            value={currentSaveValue}
            onChange={currentSaveHandler}
          /> */}
          <input
            type="number"
            id="current-savings"
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          {/* <input
            type="number"
            id="yearly-contribution"
            value={yearlyContributionValue}
            onChange={yearlyContributionHandler}
          /> */}
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={styled["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          {/* <input
            type="number"
            id="expected-return"
            value={expectedReturnValue}
            onChange={expectedReturnHandler}
          /> */}
          <input
            type="number"
            id="expected-return"
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          {/* <input
            type="number"
            id="duration"
            value={durationValue}
            onChange={durationHandler}
          /> */}
          <input
            type="number"
            id="duration"
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={styled.actions}>
        <button
          type="reset"
          className={styled.buttonAlt}
          onClick={resetEventHandler}
        >
          Reset
        </button>
        <button type="submit" className={styled.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;
