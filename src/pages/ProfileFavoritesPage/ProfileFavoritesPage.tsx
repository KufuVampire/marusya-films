import { MoviesList } from '@/components';
import { useFavorites } from '@/hooks';

export const ProfileFavoritesPage = () => {
	const { data, isSuccess, isPending } = useFavorites();

	return (
		<MoviesList
			movies={data}
			cardType='favorites'
			isPending={isPending}
			isSuccess={isSuccess}
		/>
	);
};
