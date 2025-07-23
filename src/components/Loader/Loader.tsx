import { cn } from '@/utils';

interface Props {
	className?: string;
}

export const Loader = ({ className }: Props) => {
	return (
		<div
			className={cn(
				'flex items-center justify-center w-full animate-spin after:w-6 after:h-6 after:border-2 after:border-white after:border-b-2 after:border-b-transparent after:rounded-full',
				className
			)}></div>
	);
};
