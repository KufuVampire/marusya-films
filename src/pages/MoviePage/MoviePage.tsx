import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { getMovieById } from '@/api';
import { AboutMovieSection, Container, Main, MovieSection, Section } from '@/components';
import { queryClient } from '@/config';
import styles from './styles.module.css'

export const MoviePage = () => {
	const { movieId } = useParams();

	const { data, isSuccess } = useQuery(
		{
			queryKey: ['movie', movieId],
			queryFn: () => getMovieById(movieId!),
		},
		queryClient
	);

	if (!movieId) {
		return (
			<Main>
				<Section>
					<Container>
						<p>Не удалось найти фильм по этому id: {movieId}</p>
					</Container>
				</Section>
			</Main>
		);
	}

	if (!isSuccess) {
		return (
			<Main>
				<Section>
					<Container>
						<p>Не удалось загрузить фильм</p>
					</Container>
				</Section>
			</Main>
		);
	}

	return (
		<Main>
			<MovieSection
				data={data}
				page='movie'
				classNameBtnWrapper={styles.btns}
			/>
			<AboutMovieSection data={data} />
		</Main>
	);
};
