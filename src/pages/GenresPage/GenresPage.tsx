import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

import { getGenres } from '@/api';
import {
	Container,
	GenreCardSkeleton,
	Heading,
	Main,
	Section,
} from '@/components';
import { PAGE_ROUTES } from '@/config';

const skeletons = new Array(20).fill(0);

export const GenresPage = () => {
	const { data, isSuccess, isPending } = useQuery({
		queryKey: ['genres'],
		queryFn: getGenres,
	});

	return (
		<Main>
			<Section >
				<Container className='flex flex-col gap-y-10 md:gap-y-16'>
					<Heading
						As='h1'
						text='Жанры фильмов'
					/>
					<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-6 md:gap-y-16'>
						{isPending &&
							skeletons.map((_, i) => <GenreCardSkeleton key={i} />)}
						{isSuccess &&
							data.map((genre, i) => (
								<li
									className='flex flex-col md:max-w-[290px] w-full min-h-[304px] rounded-3xl bg-[#616161] shadow-card border-card overflow-hidden'
									key={i}>
									<Link
										to={PAGE_ROUTES.moviesByGenre(genre)}
										className='flex flex-col grow'>
										<div className='w-full h-full max-h-[220px]'>
											<img
												className='w-full h-full'
												src={`/${genre}.jpg`}
												alt={genre}
											/>
										</div>
										<div className='bg-[#0a0b0b] w-full flex items-center justify-center max-h-[84px] h-full'>
											<Heading
												As='h3'
												text={genre}
											/>
										</div>
									</Link>
								</li>
							))}
					</ul>
				</Container>
			</Section>
		</Main>
	);
};
