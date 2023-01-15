import { useState } from "react";
import "./App.css";
import NewExpenses from "./component/newExpenses/NewExpenses";
import { Expenses } from "./component/expenses/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Зарядник",
      price: 300,
      date: new Date().getDate().toString(),
    },
    {
      title: "Телефон",
      price: 17000,
      date: new Date().getDate().toString(),
    },
  ]);

  const addNevExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <NewExpenses onNewExpenseAdd={addNevExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
