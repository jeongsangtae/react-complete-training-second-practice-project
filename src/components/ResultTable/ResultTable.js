import React from "react";

import styled from "./ResultTable.module.css";

const formattet = new Intl.NumberFormat("ko-KR", {
  style: "currency",
  currency: "KRW",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const ResultTable = (props) => {
  return (
    <table className={styled.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {/* <tbody>
        {props.calculateData?.map((calculateResult) => (
          // totalInterest += calculateResult.yearlyInterest;
          // investedCapital = calculateResult.savingsEndOfYear - totalInterest;
          <tr>
            <td>{calculateResult.year}</td>
            <td>${calculateResult.savingsEndOfYear}</td>
            <td>${calculateResult.yearlyInterest}</td>
            <td>${calculateResult.totalInterest}</td>
            <td>${calculateResult.investedCapital}</td>
          </tr>
        ))}
      </tbody> */}
      <tbody>
        {props.calculateData.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formattet.format(yearData.savingsEndOfYear)}</td>
            <td>{formattet.format(yearData.yearlyInterest)}</td>
            <td>
              {formattet.format(
                yearData.savingsEndOfYear -
                  props.initialInvestment -
                  yearData.yearlyContribution * yearData.year
              )}
            </td>
            <td>
              {formattet.format(
                props.initialInvestment +
                  yearData.yearlyContribution * yearData.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
