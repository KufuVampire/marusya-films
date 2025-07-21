import type { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router';

import { Rating } from '@/components';
import { PAGE_ROUTES } from '@/config';
import type { MovieDto } from '@/types';
import { cn, formatRuntime } from '@/utils';

import styles from './styles.module.css';

interface Props {
	data: MovieDto[];
	setValue: Dispatch<SetStateAction<string>>;
	className?: string;
}

export const LiveSearchMovies = ({ data, setValue, className }: Props) => {
	return (
		<ul
			className={cn(
				'absolute flex flex-col p-2 rounded-lg lg:max-w-[543px] w-full bg-[#393b3c] top-15 right-0 max-h-[476px] overflow-auto animate-[var(--show-search-animation)]',
				className,
				styles.scrollbar
			)}>
			{data.map((movie) => (
				<li
					key={movie.id}
					className='py-5 px-2 w-full'>
					<Link
						to={PAGE_ROUTES.movieById(movie.id)}
						className='flex gap-x-4'
						onClick={() => setValue('')}>
						{movie.posterUrl ? (
							<img
								src={movie.posterUrl}
								alt={movie.title}
								className='w-10 h-13 object-cover'
							/>
						) : (
							<div className='w-10 h-13 bg-[#3c3c3c]' />
						)}
						<div className='flex flex-col justify-between gap-y-2'>
							<div className='flex gap-x-3 items-start lg:items-center'>
								<Rating
									rating={movie.tmdbRating}
									className='py-0.5 px-2'
									variant='small'
								/>
								<span className='text-[rgba(255,255,255,.7)] text-sm leading-5 hidden lg:inline'>
									{new Date(movie.releaseDate).getFullYear()}
								</span>
								<span className='text-[rgba(255,255,255,.7)] text-sm leading-5'>
									{movie.genres[0]}
								</span>
								<span className='text-[rgba(255,255,255,.7)] text-sm leading-5'>
									{formatRuntime(movie.runtime)}
								</span>
							</div>
							<h2 className='text-[#fff] text-lg leading-6'>{movie.title}</h2>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};
