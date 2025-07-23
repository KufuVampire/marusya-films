import type { PropsWithChildren } from 'react';

import { cn } from '@/utils';

interface Props {
	className?: string;
}

export const Section = ({ children, className }: PropsWithChildren<Props>) => {
	return (
		<section className={cn('pt-4 pb-10 md:pt-16 md:pb-40', className)}>
			{children}
		</section>
	);
};
