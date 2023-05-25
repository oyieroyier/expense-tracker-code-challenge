import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Select,
	Text,
} from '@chakra-ui/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from '../categories';

const schema = z.object({
	description: z
		.string()
		.min(3, { message: 'Description should be at least 3 characters long' })
		.max(50, {
			message: 'Description should not be more than 50 characters long',
		}),
	amount: z.number({ invalid_type_error: 'Amount is required' }).positive(),
	category: z.enum(categories, {
		errorMap: () => ({
			message: 'Category is required.',
		}),
	}),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ExpenseFormData>({
		resolver: zodResolver(schema),
	});
	return (
		<FormControl
			as={'form'}
			onSubmit={handleSubmit((data) => console.log(data))}
		>
			<Box mb={3}>
				<FormLabel htmlFor="description"> Description</FormLabel>
				<Input id="description" type="text" {...register('description')} />
				{errors.description && <Text>{errors.description.message}</Text>}
			</Box>

			<Box mb={3}>
				<FormLabel htmlFor="amount"> Amount</FormLabel>
				<Input
					id="amount"
					type="number"
					{...register('amount', { valueAsNumber: true })}
				/>
				{errors.amount && <Text>{errors.amount.message}</Text>}
			</Box>

			<Box mb={3}>
				<FormLabel htmlFor="category"> Amount</FormLabel>
				<Select id="category" {...register('category')}>
					<option value={''}></option>
					{categories.map((category, index: number) => (
						<option key={index} value={category}>
							{category}
						</option>
					))}
				</Select>
				{errors.category && <Text>{errors.category.message}</Text>}
			</Box>
			<Button onClick={handleSubmit((data) => console.log(data))}>
				Submit
			</Button>
		</FormControl>
	);
};

export default ExpenseForm;
