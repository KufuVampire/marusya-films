import { memo } from 'react';
import { Link } from 'react-router';

import { Icon } from '../Icon/Icon';

import styles from './styles.module.css';
import { PAGE_ROUTES } from '@/config';
import type { MovieCardType, MovieDto } from '@/types';
import { cn } from '@/utils';

interface Props {
	movie: MovieDto;
	type?: MovieCardType;
	className?: string;
	number?: number;
}

export const MovieCard = memo(({ movie, type, className, number }: Props) => {
	return (
		<li
			className={cn(
				'relative bg-[#3c3c3c] md:max-w-[224px] w-full min-h-[336px] shadow-card rounded-2xl border-card shrink-0',
				styles.item,
				className
			)}>
			<Link
				to={PAGE_ROUTES.movieById(movie.id)}
				className='w-full h-full'>
				<img
					src={movie.posterUrl}
					alt={movie.title}
					className='w-full h-full rounded-2xl'
				/>
			</Link>
			{type === 'favorites' && (
				<button
					className={cn(
						'flex items-center justify-center absolute -top-5 -right-5 bg-white rounded-full px-2 py-2 opacity-0 transition-opacity',
						styles.close__btn
					)}
					data-id={movie.id}>
					<Icon
						name='cross'
						className='cursor-pointer fill-black'
					/>
				</button>
			)}

			{type === 'top10' && (
				<div
					className={cn(
						'flex items-center justify-center absolute py-2 text-2xl leading-8 bg-white rounded-full px-6 -top-3 -left-3 text-[#6A5DC2] font-bold'
					)}>
					{number}
				</div>
			)}
		</li>
	);
});
