import logo from "./assets/investment-calculator-logo.png";
import React, { useState } from "react";

import Header from "./components/Header";
import CalculatorForm from "./components/CalculatorForm";
import ResultTable from "./components/ResultTable";

const App = () => {
  const [saveCalculateData, setSaveCalculateData] = useState();

  const calculateHandler = (enteredCalculateData) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let totalInterest = 0;
    let currentSavings = +enteredCalculateData.currentSaveObject; // feel free to change the shape of this input object!
    const yearlyContribution = +enteredCalculateData.yearlyContributionObject; // as mentioned: feel free to change the shape...
    const expectedReturn = +enteredCalculateData.expectedReturn / 100;
    const duration = +enteredCalculateData.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      const investedCapital = currentSavings - totalInterest;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
      });

      console.log(enteredCalculateData);
      // setSaveCalculateData((prevCalculateData) => {
      //   return [enteredCalculateData, ...prevCalculateData];
      // });
      setSaveCalculateData(yearlyData);
      console.log(yearlyData);
    }

    // do something with yearlyData ...
  };

  // const saveCalculateDataHandler = (enteredCalculateData) => {
  //   console.log(enteredCalculateData);
  //   setSaveCalculateData((prevCalculateData) => {
  //     return [enteredCalculateData, ...prevCalculateData];
  //   });
  //  const calculateData = {
  //    ...enteredCalculateData,
  //    id: Math.random().toString(),
  //   // };
  // };

  return (
    <div>
      <Header image={logo} />
      <CalculatorForm onSaveCalculateData={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultTable calculateData={saveCalculateData} />
    </div>
  );
};

export default App;
