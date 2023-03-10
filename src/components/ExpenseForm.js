import React, { useState} from 'react'
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [enteredTitle,setEnteredTitle] = useState(''); 
    const [enteredAmount,setEnteredAmount] = useState(''); 
    const [enteredDate,setEnteredDate] = useState(''); 

    // const [userInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState)=> {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })

        //to get the latest state value
        // setUserInput((prevState)=> {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
        // setUserInput((prevState)=> {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
           title: enteredTitle,
           amount:  enteredAmount,
           date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate("");
    }
  return (
    <form onSubmit = {submitHandler}>
        <div className="new-expense-controls">
            <div className='new-expense-control'>
                <label>Title</label>
                <input type='text' 
                value={enteredTitle}
                onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense-control'>
                <label>Amount</label>
                <input type='number' 
                min='0.01'
                 step='0.01'
                value={enteredAmount}
                 onChange={amountChangeHandler} 
                 />
            </div>
            <div className='new-expense-control'>
                <label>Date</label>
                <input type='date' 
                min="2019-01-01" 
                max="2022-12-31" 
                value={enteredDate}
                onChange={dateChangeHandler}
                />
            </div>
            <div className="new-expense-actions">
                <button type='button' onClick= {props.onCancelClick}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default ExpenseForm