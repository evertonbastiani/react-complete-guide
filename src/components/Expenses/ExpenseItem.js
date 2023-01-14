import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
    
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);

    const clickHandler = () =>{  
        setTitle('Updated');     
        setAmount(12.50);
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;