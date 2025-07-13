import type { HTMLProps, MouseEventHandler, PropsWithChildren } from 'react';

import { cn } from '@/utils';

type VariantType = 'primary' | 'secondary' | 'clear';

interface Props extends HTMLProps<HTMLButtonElement> {
	variant?: VariantType;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	title?: string;
	type?: 'submit' | 'reset' | 'button';
}

const variantStyles = {
	primary:
		'bg-[#67a5eb] disabled:bg-[#45526e] hover:bg-[#ffffff] hover:text-[#000000]',
	secondary: 'bg-[#393b3c] disabled:bg-[#747474]',
	clear: '',
};

export const Button = ({
	variant = 'primary',
	className,
	children,
	onClick,
	title,
	style,
	type,
}: PropsWithChildren<Props>) => {
	return (
		<button
			style={style}
			type={type}
			onClick={onClick}
			title={title}
			className={cn(
				'text-white text-lg leading-6 rounded-[28px] cursor-pointer py-4 px-8 xl:px-12 transition-colors duration-200 ease-linear font-bold',
				variantStyles[variant],
				className
			)}>
			{children}
		</button>
	);
};
