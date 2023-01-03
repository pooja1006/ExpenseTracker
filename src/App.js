import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense';
import React, {useState} from 'react';

const DUMMY_EXPENSES = [
  {id: 'e1',title: "Car Insurance", amount : 297.86, date: new Date(2021, 2,28)},
  {id: 'e2',title: "Life Insurance", amount : 8738.86, date: new Date(2020, 6,20)},
  {id: 'e3',title: "Home Insurance", amount : 4783.86, date: new Date(2021, 7,18)},
  {id: 'e4',title: "Dog Insurance", amount : 748.86, date: new Date(2020, 5, 8)},
];

function App() {
  const [expenses,setExpenses] =useState(DUMMY_EXPENSES)
  
  const addExpenseHandler = expense => {
    setExpenses((prevState)=> { 
      return [expense,...prevState];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
