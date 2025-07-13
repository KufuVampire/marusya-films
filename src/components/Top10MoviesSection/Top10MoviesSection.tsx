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
			<Container className='px-0'>
				<Heading
					text='Топ 10 фильмов'
					className='px-[18.5px] lg:px-0'
				/>
				<div className='px-[18.5px] py-8 pt-10 lg:pt-16 lg:py-0 lg:px-0 overflow-scroll lg:overflow-visible'>
					<MoviesList
						isPending={isPending}
						isSuccess={isSuccess}
						movies={data}
					/>
				</div>
			</Container>
		</Section>
	);
};
