import { match } from 'path-to-regexp';
import { useLocation } from 'react-router';

import { MenuItem } from '@/components';
import type { IMenuItem } from '@/types';
import { cn } from '@/utils';

interface Props {
	items: IMenuItem[];
	className?: string;
}

export const Menu = ({ items, className }: Props) => {
	const { pathname } = useLocation();

	return (
		<nav className={cn('flex items-center', className)}>
			<ul className='flex gap-x-6 sm:gap-x-10 items-center justify-center'>
				{items.map((item, i) => (
					<MenuItem
						key={i}
						item={item}
						isActive={!!match(item.href)(pathname)}
					/>
				))}
			</ul>
		</nav>
	);
};
