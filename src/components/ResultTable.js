import React from "react";

const ResultTable = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.calculateData?.map((calculateResult) => (
          // totalInterest += calculateResult.yearlyInterest;
          // investedCapital = calculateResult.savingsEndOfYear - totalInterest;
          <tr>
            <td>{calculateResult.year}</td>
            <td>{calculateResult.savingsEndOfYear}</td>
            <td>{calculateResult.yearlyInterest}</td>
            <td>{calculateResult.totalInterest}</td>
            <td>{calculateResult.investedCapital}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
