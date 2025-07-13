import { setAuthFormOpen } from '@/store/slices';

import { LoginForm, Modal, RegisterForm } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks';

export const AuthFormModal = () => {
	const { isAuthFormOpen, type } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(setAuthFormOpen(false));
	};

	return (
		<Modal
			cb={handleClick}
			isOpen={isAuthFormOpen}>
			<div className='flex flex-col items-center bg-white pt-16 pb-8 lg:py-16 px-5 lg:px-10 rounded-3xl max-w-[420px] w-full'>
				<img
					src={'/logo-black.svg'}
					alt='Маруся логотип'
					className='mb-10'
				/>
				{type === 'register' ? <RegisterForm /> : <LoginForm />}
			</div>
		</Modal>
	);
};
