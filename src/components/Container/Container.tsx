import type { MouseEventHandler, PropsWithChildren } from 'react';

import { cn } from '@/utils';

interface Props {
	className?: string;
	onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Container = ({
	className,
	children,
	onClick,
}: PropsWithChildren<Props>) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				className,
				'w-full mx-auto px-[18.5px] lg:px-20 max-w-[var(--container-max-width)]'
			)}>
			{children}
		</div>
	);
};
