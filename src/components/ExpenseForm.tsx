import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Select,
} from '@chakra-ui/react';
import { categories } from '../App';

const ExpenseForm = () => {
	return (
		<FormControl>
			<Box mb={3}>
				<FormLabel htmlFor="description"> Description</FormLabel>
				<Input id="description" type="text" />
			</Box>

			<Box mb={3}>
				<FormLabel htmlFor="amount"> Amount</FormLabel>
				<Input id="amount" type="number" />
			</Box>

			<Box mb={3}>
				<FormLabel htmlFor="category"> Amount</FormLabel>
				<Select id="category">
					<option value={''}></option>
					{categories.map((category, index: number) => (
						<option key={index} value={category}>
							{category}
						</option>
					))}
				</Select>
			</Box>
			<Button>Submit</Button>
		</FormControl>
	);
};

export default ExpenseForm;
