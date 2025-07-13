import type { PropsWithChildren } from 'react';

import { cn } from '@/utils';

interface Props {
	As?: 'h1' | 'h2' | 'h3';
	text: string;
	className?: string;
}

const styles = {
	defaultStyles: 'flex items-center gap-x-4 font-bold text-white m-0 text-2xl leading-8',
	h1: 'sm:text-5xl sm:leading-14',
	h2: 'sm:text-[40px] sm:leading-12',
	h3: 'sm:text-2xl sm:leading-8 text-center',
};

export const Heading = ({
	As = 'h2',
	text,
	className,
	children,
}: PropsWithChildren<Props>) => {
	return (
		<As className={cn(styles.defaultStyles, styles[As], className)}>
			{children}
			{text}
		</As>
	);
};
