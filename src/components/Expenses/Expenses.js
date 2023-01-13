import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props){  
  return(
       <Card className='expenses'>
         <ExpenseItem title="Toilet Paper" amount={94.12} date = {new Date(2023, 1, 9)}></ExpenseItem>
         <ExpenseItem title="New TV" amount={799.49} date = {new Date(2023, 1, 1)} ></ExpenseItem>
         <ExpenseItem title="Car Insurance" amount={294.67} date = {new Date(2023, 1, 4)} ></ExpenseItem>
         <ExpenseItem title="New Desk(wooden)" amount={450} date = {new Date(2023, 1, 3)} ></ExpenseItem>
         <ExpenseItem title="React complete guide course" amount={39.90} date = {new Date(2023, 1, 3)} ></ExpenseItem>
       </Card>  
  );
}

export default Expenses;