import {
	setAuthFormOpen,
	setAuthFormType,
	setRegistrationSuccessFormOpen,
} from '@/store/slices';

import { Button, Modal } from '@/components';
import { AUTH_FORM_TYPES } from '@/config';
import { useAppDispatch, useAppSelector } from '@/hooks';

export const RegistrationSuccessModal = () => {
	const dispatch = useAppDispatch();
	const { isRegistrationSuccessFormOpen } = useAppSelector(
		(state) => state.success
	);

	const handleClick = () => {
		dispatch(setRegistrationSuccessFormOpen(false));
		dispatch(setAuthFormType(AUTH_FORM_TYPES.login));
		dispatch(setAuthFormOpen(true));
	};

	return (
		<Modal
			isOpen={isRegistrationSuccessFormOpen}
			cb={() => dispatch(setRegistrationSuccessFormOpen(false))}>
			<div className='flex flex-col items-center bg-white pt-16 pb-8 lg:py-16 px-5 lg:px-10 rounded-3xl max-w-[420px] w-full'>
				<img
					src={'/logo-black.svg'}
					alt='Маруся логотип'
					className='mb-10'
				/>
				<div className='flex flex-col items-center gap-y-6'>
					<h2 className='text-2xl leading-8 font-bold text-black'>
						Регистрация завершена
					</h2>
					<p className='text-lg leading-6 text-black text-center'>
						Используйте вашу электронную почту для входа
					</p>
					<Button
						onClick={handleClick}
						className='w-full'>
						Войти
					</Button>
				</div>
			</div>
		</Modal>
	);
};
