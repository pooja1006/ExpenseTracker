import React,{ useState } from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'
function ExpenseItem(props) {
  return (
    <>
    <Card className = "expense-item">
        <ExpenseDate date={props.date}/>
        <div className = "expense-item-description">
            <h2>{props.title}</h2>
            <div className="expense-item-price">Rs{props.amount}</div>
        </div>
    </Card>
    </>
  );
}

export default ExpenseItem;

//You must have only one JSX inside a component
