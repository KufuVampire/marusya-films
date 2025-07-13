import { useQuery } from '@tanstack/react-query';

import { getRandomMovie } from '@/api';

export const useRandomMovie = () =>
	useQuery({
		queryKey: ['movie', 'random'],
		queryFn: getRandomMovie,
		retry: 0,
	});
