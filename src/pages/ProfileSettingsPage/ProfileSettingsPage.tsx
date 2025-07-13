import { Icon, LogoutButton } from '@/components';
import { useAppSelector } from '@/hooks';

export const ProfileSettingsPage = () => {
	const { user } = useAppSelector((state) => state.user);

	return (
		<>
			<ul className='flex flex-col gap-y-10'>
				<li className='flex items-center gap-x-4'>
					<div className='w-15 h-15 p-[14px] flex items-center justify-center rounded-full bg-[#8d929b]'>
						<p className='text-2xl leading-8 font-bold text-white'>
							{user.name.charAt(0).toUpperCase() +
								user.surname.charAt(0).toUpperCase()}
						</p>
					</div>
					<div className='flex flex-col justify-between gap-y-1'>
						<p className='text-lg leading-6 text-white'>Имя Фамилия</p>
						<p className='capitalize text-2xl leading-8 font-bold text-white'>{`${user.name} ${user.surname}`}</p>
					</div>
				</li>
				<li className='flex items-center gap-x-4'>
					<div className='w-15 h-15 p-[14px] flex items-center justify-center rounded-full bg-[#8d929b]'>
						<Icon
							name='mail'
							className='fill-white'
						/>
					</div>
					<div className='flex flex-col justify-between gap-y-1'>
						<p className='text-lg leading-6 text-white'>Электронная почта</p>
						<p className='text-2xl leading-8 font-bold text-white'>
							{user.email}
						</p>
					</div>
				</li>
			</ul>
			<LogoutButton />
		</>
	);
};
