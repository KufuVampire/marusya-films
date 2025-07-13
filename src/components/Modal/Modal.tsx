import { type MouseEvent, type PropsWithChildren } from 'react';

import { CloseModalButton } from '@/components';
import { cn } from '@/utils';

interface Props {
	className?: string;
	wrapperClassName?: string;
	cb: () => void;
	isOpen: boolean;
}

export const Modal = ({
	children,
	className,
	wrapperClassName,
	cb,
	isOpen,
}: PropsWithChildren<Props>) => {
	const handleClick = (event: MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			cb();
		}
	};

	return (
		<div
			onClick={handleClick}
			className={cn(
				'bg-[rgba(0,0,0,.5)] fixed inset-0 flex items-center justify-center z-10 scale-0 opacity-0 transition-all', {
				['scale-100 opacity-100']: isOpen,
			},
				className
			)}>
			<div
				className={cn(
					'relative flex items-center justify-center px-5 max-w-[564px] w-full',
					wrapperClassName
				)}>
				{children}
				<CloseModalButton cb={cb} />
			</div>
		</div>
	);
};
