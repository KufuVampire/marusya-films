import { Container, MoviesList } from '@/components';
import { useFavorites } from '@/hooks';

export const ProfileFavoritesPage = () => {
	const { data, isSuccess, isPending } = useFavorites();

	return (
		<Container className='overflow-y-hidden overflow-x-scroll lg:overflow-visible py-10 md:py-16'>
			<MoviesList
				movies={data}
				cardType='favorites'
				isPending={isPending}
				isSuccess={isSuccess}
			/>
		</Container>
	);
};
