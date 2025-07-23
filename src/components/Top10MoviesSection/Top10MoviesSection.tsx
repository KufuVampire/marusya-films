import { useQuery } from '@tanstack/react-query';

import { getTop10Movies } from '@/api';
import { Container, Heading, MoviesList, Section } from '@/components';
import { queryClient } from '@/config';

export const Top10MoviesSection = () => {
	const { data, isSuccess, isPending } = useQuery(
		{
			queryKey: ['movies', 'top10'],
			queryFn: () => getTop10Movies(),
		},
		queryClient
	);

	return (
		<Section className='py-8 md:py-8 lg:pt-10 lg:pb-[120px]'>
			<Container>
				<Heading
					text='Топ 10 фильмов'
				/>
			</Container>
			<Container className='px-[18.5px] py-8 pt-10 lg:pt-16 overflow-y-hidden overflow-x-scroll lg:overflow-visible'>
				<MoviesList
					isPending={isPending}
					isSuccess={isSuccess}
					movies={data}
				/>
			</Container>
		</Section>
	);
};
