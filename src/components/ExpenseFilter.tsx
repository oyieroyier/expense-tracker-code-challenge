import { Select } from '@chakra-ui/react';
import categories from '../categories';

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
			p={3}
		>
			<option value="">All Categories</option>
			{categories.map((category, index: number) => (
				<option key={index} value={category}>
					{category}
				</option>
			))}
		</Select>
	);
};

export default ExpenseFilter;
