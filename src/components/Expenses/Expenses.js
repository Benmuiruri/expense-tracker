import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const yearFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeYearFilter={yearFilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
