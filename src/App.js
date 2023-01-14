import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpesnse from './components/NewExpense/NewExpense';


const App = ()=> {
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpesnse></NewExpesnse>
      <Expenses></Expenses>
    </div>
  );
}

export default App;
