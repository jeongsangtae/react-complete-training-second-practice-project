import React, { useState } from "react";

import Header from "./components/Header/Header";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import ResultTable from "./components/ResultTable/ResultTable";

const App = () => {
  // const [saveCalculateData, setSaveCalculateData] = useState();

  // const calculateHandler = (enteredCalculateData) => {
  //   // Should be triggered when form is submitted
  //   // You might not directly want to bind it to the submit event on the form though...

  //   const yearlyData = []; // per-year results

  //   let totalInterest = 0;
  //   let currentSavings = +enteredCalculateData.currentSaveObject; // feel free to change the shape of this input object!
  //   const yearlyContribution = +enteredCalculateData.yearlyContributionObject; // as mentioned: feel free to change the shape...
  //   const expectedReturn = +enteredCalculateData.expectedReturn / 100;
  //   const duration = +enteredCalculateData.duration;

  //   // The below code calculates yearly results (total savings, interest etc)
  //   for (let i = 0; i < duration; i++) {
  //     const yearlyInterest = currentSavings * expectedReturn;
  //     currentSavings += yearlyInterest + yearlyContribution;
  //     totalInterest += yearlyInterest;
  //     const investedCapital = currentSavings - totalInterest;
  //     yearlyData.push({
  //       // feel free to change the shape of the data pushed to the array!
  //       year: i + 1,
  //       yearlyInterest: yearlyInterest,
  //       savingsEndOfYear: currentSavings,
  //       yearlyContribution: yearlyContribution,
  //       totalInterest: totalInterest,
  //       investedCapital: investedCapital,
  //     });

  //     console.log(enteredCalculateData);
  //     // setSaveCalculateData((prevCalculateData) => {
  //     //   return [enteredCalculateData, ...prevCalculateData];
  //     // });
  //     setSaveCalculateData(yearlyData);
  //     console.log(yearlyData);
  //   }

  //   // do something with yearlyData ...
  // };
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <CalculatorForm onSaveCalculateData={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment calcuated yet.</p>
      )}
      {userInput && (
        <ResultTable
          calculateData={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
};

export default App;
