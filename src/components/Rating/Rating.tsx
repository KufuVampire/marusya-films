import { Icon } from '@/components';
import { cn } from '@/utils';

interface Props {
	rating: number;
	className?: string;
	variant?: 'default' | 'small';
}

export const Rating = ({ rating, className, variant = 'default' }: Props) => {
	const isSmall = variant === 'small';
	return (
		<div
			className={cn(
				'flex items-center gap-x-1 px-3 py-1 rounded-2xl',
				className,
				{
					['bg-[#a59400]']: rating >= 8,
					['bg-[#308e21]']: rating < 8,
					['bg-[#777777]']: rating < 7,
					['bg-[#c72020]']: rating < 5,
				}
			)}>
			<Icon
				name='star'
				className={cn({
					['w-2.5 h-2.5']: isSmall,
				})}
			/>
			<span
				className={cn('text-[#fff] text-lg leading-6 font-bold', {
					['text-xs leading-4']: isSmall,
				})}>
				{rating.toFixed(1)}
			</span>
		</div>
	);
};
