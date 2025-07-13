import { Main, MovieSection, Top10MoviesSection } from '@/components';
import { useRandomMovie } from '@/hooks';

export const MainPage = () => {
	const { data, refetch } = useRandomMovie();

	return (
		<Main>
			<MovieSection
				data={data}
				refetch={refetch}
			/>
			<Top10MoviesSection />
		</Main>
	);
};
