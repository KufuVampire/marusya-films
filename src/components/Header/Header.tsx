import { type MouseEvent, useRef, useState } from 'react';
import { Link } from 'react-router';

import { setAuthFormOpen } from '@/store/slices';

import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { Icon } from '../Icon/Icon';
import { Loader } from '../Loader/Loader';
import { Menu } from '../Menu/Menu';
import { MovieSearch } from '../MovieSearch/MovieSearch';

import { PAGE_ROUTES } from '@/config';
import { MAIN_NAV_ITEMS } from '@/consts';
import { useAppDispatch } from '@/hooks';
import type { UserDto } from '@/types';
import { cn } from '@/utils';

interface Props {
	user: UserDto | undefined;
	isPending?: boolean;
	isSuccess?: boolean;
}

export const Header = ({ user, isPending, isSuccess }: Props) => {
	const [isSearchOpen, setSearchOpen] = useState(false);
	const searchRef = useRef<HTMLDivElement>(null);
	const dispatch = useAppDispatch();

	const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
		if (
			searchRef &&
			e.target instanceof Node &&
			!searchRef.current?.contains(e.target)
		) {
			setSearchOpen(false);
		}
	};

	return (
		<header className='w-full bg-transparent py-6'>
			<Container className='flex items-center justify-between lg:justify-normal gap-x-20'>
				<Link
					to={PAGE_ROUTES.home}
					className='min-w-[102px]'>
					<img
						src='/logo.svg'
						alt='Маруся'
					/>
				</Link>

				<div className='w-full item-center gap-x-10 xl:gap-x-10 hidden lg:flex'>
					<Menu items={MAIN_NAV_ITEMS} />
					<MovieSearch />
				</div>

				{isPending && <Loader className='max-w-[69px] hidden lg:block' />}
				{isSuccess && user && (
					<Menu
						className='capitalize hidden lg:flex'
						items={[{ name: user.name, href: PAGE_ROUTES.profile }]}
					/>
				)}
				{!isPending && !isSuccess && (
					<Button
						variant='clear'
						className='hidden lg:block text-center text-2xl leading-8 min-h-12 min-w-[69px] text-[#FFFFFF] font-normal p-0 cursor-pointer'
						onClick={() => dispatch(setAuthFormOpen(true))}>
						Войти
					</Button>
				)}

				<Container
					onClick={handleClickOutside}
					className={cn('fixed hidden w-full inset-0 py-4 bg-[rgba(0,0,0,.5)]', {
						['block']: isSearchOpen,
					})}>
					<MovieSearch
						ref={searchRef}
					/>
				</Container>

				<nav className='flex items-center lg:hidden'>
					<ul className='flex items-center gap-x-5'>
						<li>
							<Link to='/genres'>
								<Icon name='genres' />
							</Link>
						</li>
						<li>
							<Button
								variant='clear'
								className='p-0 flex items-center'
								onClick={() => setSearchOpen(true)}>
								<Icon name='search' />
							</Button>
						</li>
						<li>
							{!isPending && !isSuccess && (
								<Button
									variant='clear'
									className='flex items-center p-0'
									onClick={() => dispatch(setAuthFormOpen(true))}>
									<Icon
										name='user'
										className='fill-white'
									/>
								</Button>
							)}
							{isSuccess && (
								<Link to='/profile'>
									<Icon
										name='user'
										className='fill-white'
									/>
								</Link>
							)}
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	);
};
