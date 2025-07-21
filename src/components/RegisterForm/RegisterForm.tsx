import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import {
	setAuthFormOpen,
	setRegistrationSuccessFormOpen,
	toggleAuthForm,
} from '@/store/slices';

import { createUser } from '@/api';
import { Button, FormField } from '@/components';
import { queryClient } from '@/config';
import { REGISTER_INPUTS } from '@/consts';
import { useAppDispatch, useAppSelector } from '@/hooks';
import type { IInputs } from '@/types';

export const RegisterForm = () => {
	const { isAuthFormOpen } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<IInputs>({ mode: 'onChange' });

	const { mutate } = useMutation(
		{
			mutationKey: ['auth', 'create'],
			mutationFn: (data: IInputs) => createUser(data),
			onSuccess() {
				reset();
				dispatch(setAuthFormOpen(false));
				dispatch(setRegistrationSuccessFormOpen(true));
			},
		},
		queryClient
	);

	useEffect(() => {
		if (!isAuthFormOpen) {
			reset();
		}
	}, [isAuthFormOpen]);

	const onSubmit: SubmitHandler<IInputs> = (data) => {
		if (data.password !== data.repeatPassword) {
			setError('repeatPassword', {
				type: 'manual',
				message: 'Пароль не совпадают',
			});
			return;
		}

		mutate(data);
	};

	return (
		<form
			className='flex flex-col items-center gap-y-6 w-full'
			onSubmit={handleSubmit(onSubmit)}>
			<h2 className='text-2xl leading-8 font-bold text-black'>Регистрация</h2>
			<div className='flex flex-col gap-y-3 w-full'>
				{REGISTER_INPUTS.map((input) => (
					<FormField
						key={input.name}
						type={input.type}
						iconName={input.iconName}
						placeholder={input.placeholder}
						{...register(input.name, {
							required: input.required,
							minLength: {
								value: 4,
								message: 'Min length should be at least 4 characters',
							},
						})}
						error={errors[input.name]}
					/>
				))}
			</div>
			<Button
				type='submit'
				variant='primary'
				className='w-full'>
				Создать аккаунт
			</Button>
			<Button
				variant='clear'
				type='button'
				className='text-lg text-black leading-6 font-bold cursor-pointer w-full p-0'
				onClick={() => dispatch(toggleAuthForm())}>
				У меня есть пароль
			</Button>
		</form>
	);
};
