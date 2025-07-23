import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import { setUser } from '@/store/slices';

import { Container, Heading, Main, Menu, Section } from '@/components';
import { ADAPTIVE_PROFILE_NAV_ITEMS, PROFILE_NAV_ITEMS } from '@/consts';
import { useAppDispatch, useProfile } from '@/hooks';

export const ProfilePage = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { data, isSuccess, isError } = useProfile();

	useEffect(() => {
		if (isSuccess) {
			if (pathname === '/profile/settings') {
				dispatch(setUser(data));
				return;
			}

			dispatch(setUser(data));
			navigate('/profile/favorites');
		}

		if (isError) {
			navigate('/', { replace: true });
		}
	}, [isSuccess]);

	return (
		<Main>
			<Section className='pb-10 md:pb-[120px] flex flex-col items-start'>
				<Container className='flex flex-col items-start gap-y-10 md:gap-y-16'>
					<Heading
						As='h1'
						text='Мой аккаунт'
					/>
					<Menu
						items={PROFILE_NAV_ITEMS}
						className='hidden lg:flex'
					/>
					<Menu
						items={ADAPTIVE_PROFILE_NAV_ITEMS}
						className='lg:hidden'
					/>
				</Container>
				<Outlet />
			</Section>
		</Main>
	);
};
