import { NavLink } from 'react-router';

import { Icon } from '../Icon/Icon';

import type { IMenuItem } from '@/types';
import { cn } from '@/utils';

interface Props {
	item: IMenuItem;
	isActive: boolean;
}

export const MenuItem = ({ item, isActive }: Props) => {
	return (
		<li
			className={cn('py-2 relative', {
				'before:bg-[image:var(--active-link)] before:w-full before:absolute before:bottom-0 before:left-0 before:h-0.5':
					isActive,
			})}>
			<NavLink
				className={cn('text-[#FFFFFF] text-2xl leading-8 flex items-center', {
					['gap-x-2']: item.iconName,
				})}
				to={item.href}>
				{item.iconName && (
					<Icon
						className={cn({
							['stroke-white']: item.iconName === 'heart',
							['fill-white']: item.iconName === 'user',
						})}
						name={item.iconName}
					/>
				)}
				{item.name}
			</NavLink>
		</li>
	);
};
