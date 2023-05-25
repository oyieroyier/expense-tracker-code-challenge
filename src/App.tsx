import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';

function App() {
	const [expenses, setExpenses] = useState([
		{ id: 1, description: 'Dummy expense', amount: 100, category: 'Groceries' },
		{
			id: 2,
			description: 'Dummy expense 2',
			amount: 200,
			category: 'Entertainment',
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
			category: 'Groceries',
		},
		{
			id: 5,
			description: 'Dummy expense 5',
			amount: 500,
			category: 'Utilities',
		},
	]);

	const [selectedCategory, setSelectedCategory] = useState('');

	// Expenses the user sees based on the filter.
	const visibleExpenses = selectedCategory
		? expenses.filter((expense) => expense.category === selectedCategory)
		: expenses;

	return (
		<>
			<ExpenseFilter
				onSelectCategory={(category) => setSelectedCategory(category)}
			/>
			<ExpenseList
				expenses={visibleExpenses}
				onDelete={(id) =>
					setExpenses(expenses.filter((expense) => expense.id !== id))
				}
			/>
		</>
	);
}

export default App;
