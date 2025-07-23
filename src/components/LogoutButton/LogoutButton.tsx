import { useMutation } from '@tanstack/react-query';

import { logout } from '@/api';
import { Button } from '@/components';
import { queryClient } from '@/config';

export const LogoutButton = () => {
	const { mutate } = useMutation(
		{
			mutationKey: ['user', 'profile', 'logout'],
			mutationFn: logout,
			onSuccess() {
				queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
			},
		},
		queryClient
	);

	return (
		<Button
			variant='primary'
			className='w-full sm:w-auto'
			onClick={() => mutate()}>
			Выйти из аккаунта
		</Button>
	);
};
