import { useQuery } from '@tanstack/react-query';

import { getProfile } from '@/api';
import { queryClient } from '@/config';

export const useProfile = () =>
	useQuery(
		{
			queryKey: ['user', 'profile'],
			queryFn: () => getProfile(),
			retry: 0,
		},
		queryClient
	);
