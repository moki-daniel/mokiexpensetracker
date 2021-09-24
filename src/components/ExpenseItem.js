import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 9, 24);
  const expenseTitle = "House Rent";
  const expenseAmount = 100;
  return (
    <div className="expense-item">
      <div className="expense-item__date">{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
