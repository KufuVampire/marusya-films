import { cn } from '@/utils';

export const MovieCardSkeleton = () => {
	return (
		<li
			className={cn(
				'bg-[#3c3c3c] min-w-[224px] min-h-[336px] shadow-card rounded-2xl border-card'
			)}>
			<div className='w-full h-full'></div>
		</li>
	);
};
