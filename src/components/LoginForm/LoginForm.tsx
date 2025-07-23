import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { setAuthFormOpen, toggleAuthForm } from '@/store/slices';

import { login } from '@/api';
import { Button, FormField } from '@/components';
import { queryClient } from '@/config';
import { LOGIN_INPUTS } from '@/consts';
import { useAppDispatch, useAppSelector } from '@/hooks';
import type { IInputs } from '@/types';

export const LoginForm = () => {
	const { isAuthFormOpen } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<IInputs>({ mode: 'onChange' });

	const { mutate } = useMutation(
		{
			mutationKey: ['auth', 'login'],
			mutationFn: (data: IInputs) =>
				login({ email: data.email, password: data.password }),
			onSuccess() {
				reset();
				dispatch(setAuthFormOpen(false));
				queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
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
		mutate(data);
	};

	return (
		<form
			className='flex flex-col items-center gap-y-6 w-full'
			onSubmit={handleSubmit(onSubmit)}>
			<h2 className='text-2xl leading-8 font-bold text-black'>Регистрация</h2>
			<div className='flex flex-col gap-y-3 w-full'>
				{LOGIN_INPUTS.map((input, i) => (
					<FormField
						key={i}
						type={input.type}
						iconName={input.iconName}
						placeholder={input.placeholder}
						{...register(input.name, { required: input.required })}
						error={errors[input.name]}
					/>
				))}
			</div>
			<Button
				type='submit'
				variant='primary'
				className='w-full'>
				Войти
			</Button>
			<button
				type='button'
				className='text-lg text-black leading-6 font-bold cursor-pointer w-full'
				onClick={() => dispatch(toggleAuthForm())}>
				Регистрация
			</button>
		</form>
	);
};
