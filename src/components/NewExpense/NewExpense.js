import React from "react";
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";

const NewExpesnse = () =>{
  return(
   <div className="new-expense">
      <ExpenseForm></ExpenseForm>
   </div>

  );
};
export default NewExpesnse;