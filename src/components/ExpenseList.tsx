import {
	Button,
	Table,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { TbTrash } from 'react-icons/tb';

interface Expense {
	id: number;
	description: string;
	amount: number;
	category: string;
}

interface Props {
	expenses: Expense[];
	onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
	if (!expenses.length) return null;
	return (
		<TableContainer>
			<Table  variant={'striped'}>
				<Thead>
					<Tr bg={'cyan.400'}>
						<Th>Description</Th>
						<Th>Amount</Th>
						<Th>Category</Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					{expenses.map((expense) => (
						<Tr key={expense.id}>
							<Td>{expense.description}</Td>
							<Td>{expense.amount}</Td>
							<Td>{expense.category}</Td>
							<Td>
								<Button
									onClick={() => onDelete(expense.id)}
									colorScheme="red"
									variant={'outline'}
									rightIcon={<TbTrash />}
								>
									DELETE
								</Button>
							</Td>
						</Tr>
					))}
				</Tbody>
				<Tfoot>
					<Tr>
						<Td>Total</Td>
						<Td>
							$
							{expenses
								.reduce((acc, expense) => expense.amount + acc, 0)
								.toFixed(2)}
						</Td>
						<Td></Td>
						<Td></Td>
					</Tr>
				</Tfoot>
			</Table>
		</TableContainer>
	);
};

export default ExpenseList;
