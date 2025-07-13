import { memo } from 'react';

import { useDeleteFavorite } from '@/hooks/useDeleteFavorites';

import { MovieCard, MovieCardSkeleton } from '@/components';
import { CARDS_PER_PAGE } from '@/consts';
import type { MovieCardType, MovieDto } from '@/types';
import { cn } from '@/utils';

interface Props {
	movies: MovieDto[] | undefined;
	cardType?: MovieCardType;
	className?: string;
	isSuccess: boolean;
	isPending: boolean;
}

const skeletons = new Array(CARDS_PER_PAGE).fill(0);

export const MoviesList = memo(
	({ movies, cardType = 'top10', className, isPending, isSuccess }: Props) => {
		const { handleClick } = useDeleteFavorite(['movies', 'favorites']);

		return (
			<ul
				className={cn(
					'flex xl:grid xl:grid-cols-5 gap-y-6 gap-x-10 md:gap-y-16 w-full overflow-x-scroll xl:overflow-auto',
					className,
					{
						['grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4']: cardType === 'genre'
					}
				)}
				onClick={handleClick}>
				{isPending && skeletons.map((_, i) => <MovieCardSkeleton key={i} />)}
				{isSuccess &&
					movies &&
					movies.map((movie, i) => (
						<MovieCard
							key={movie.id}
							movie={movie}
							type={cardType}
							number={i + 1}
						/>
					))}
			</ul>
		);
	}
);
