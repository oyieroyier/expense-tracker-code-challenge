import { Select } from '@chakra-ui/react';

interface Props {
	onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
	return (
		<Select
			onChange={(e) => onSelectCategory(e.target.value)}
			variant={'filled'}
			mb={'1rem'}
			bg={'blue.100'}
		>
			<option value="">All Categories</option>
			<option value="Groceries">Groceries</option>
			<option value="Utilities">Utilities</option>
			<option value="Entertainment">Entertainment</option>
		</Select>
	);
};

export default ExpenseFilter;
