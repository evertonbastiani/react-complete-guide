import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2023,1,9);
    const expseneTitle = 'Car Insurance';
    const expseneAmount = 294.67;
    return (
        <div className='expense-item'>{expenseDate.toISOString()}
            <div className='expense-item__description'><h2>{expseneTitle}</h2>
                <div className='expense-item__price'>${expseneAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;