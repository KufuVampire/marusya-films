import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import {
	Button,
	Container,
	Icon,
	Main,
	MoviesList,
	Section,
} from '@/components';
import { useMovies } from '@/hooks';
import type { MovieDto } from '@/types';

export const GenrePage = () => {
	const [movies, setMovies] = useState<MovieDto[]>([]);
	const [page, setPage] = useState(0);
	const navigate = useNavigate();
	const { genre } = useParams();

	const { data, isSuccess, isPending } = useMovies({ genre, page });

	const scrollHandler = (e: Event) => {
		if (e.target === null) return;
		const target = e.target as Document;

		if (
			target.documentElement.scrollHeight -
				(target.documentElement.scrollTop + window.innerHeight) <
			100
		) {
			setPage((prev) => prev + 1);
		}
	};

	useEffect(() => {
		setPage(0);
		setMovies([]);
		document.addEventListener('scroll', scrollHandler);
		return function () {
			document.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	useEffect(() => {
		if (isSuccess) {
			setMovies((prev) => [...prev, ...data]);
		}
	}, [isSuccess]);

	return (
		<Main>
			<Section>
				<Container className='flex flex-col gap-y-10 md:gap-y-16'>
					<Button
						variant='clear'
						className='flex items-center p-0 xl:px-0 gap-x-2 lg:gap-x-4'
						onClick={() => navigate(-1)}>
						<Icon name='arrowRight' />
						<span className='text-2xl leading-8 lg:text-5xl lg:leading-14 capitalize'>{genre}</span>
					</Button>
					<MoviesList
						movies={movies}
						cardType='genre'
						isPending={isPending}
						isSuccess={isSuccess}
					/>
				</Container>
			</Section>
		</Main>
	);
};
