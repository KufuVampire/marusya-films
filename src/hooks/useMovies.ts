import { useQuery } from '@tanstack/react-query';

import { getMovies } from '@/api';
import { queryClient } from '@/config';
import { CARDS_PER_PAGE } from '@/consts';
import type { MovieParams } from '@/types';

export const useMovies = ({
	title = '',
	genre = '',
	per_page = CARDS_PER_PAGE,
	page = 0,
}: MovieParams) =>
	useQuery(
		{
			queryKey: ['movies', 'search', title, genre, page],
			queryFn: () => getMovies({ title, genre, per_page, page }),
			enabled: title.length > 2 || genre.length > 0,
			retry: 0,
		},
		queryClient
	);
