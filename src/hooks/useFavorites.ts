import { useQuery } from '@tanstack/react-query';

import { getFavorites } from '@/api';
import { queryClient } from '@/config';

export const useFavorites = () =>
	useQuery(
		{
			queryKey: ['movies', 'favorites'],
			queryFn: getFavorites,
		},
		queryClient
	);
