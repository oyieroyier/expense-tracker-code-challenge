import { useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';

function App() {
	const [expenses, setExpenses] = useState([
		{ id: 1, description: 'Dummy expense', amount: 100, category: 'Utilities' },
		{
			id: 2,
			description: 'Dummy expense 2',
			amount: 200,
			category: 'Utilities',
		},
		{
			id: 3,
			description: 'Dummy expense 3',
			amount: 300,
			category: 'Utilities',
		},
		{
			id: 4,
			description: 'Dummy expense 4',
			amount: 400,
			category: 'Utilities',
		},
		{
			id: 5,
			description: 'Dummy expense 5',
			amount: 500,
			category: 'Utilities',
		},
	]);

	return (
		<>
			<ExpenseList
				expenses={expenses}
				onDelete={(id) =>
					setExpenses(expenses.filter((expense) => expense.id !== id))
				}
			/>
		</>
	);
}

export default App;
