import { useMutation } from '@tanstack/react-query';
import type { MouseEvent } from 'react';



import { deleteFavoriteById } from '@/api';
import { queryClient } from '@/config';





export const useDeleteFavorite = (key: string[]) => {
	const { mutate, isSuccess, isPending } = useMutation(
		{
			mutationKey: ['movie', 'favorites', 'delete'],
			mutationFn: (id: number) => deleteFavoriteById(id),
			onSuccess() {
				queryClient.invalidateQueries({ queryKey: key });
			},
		},
		queryClient
	);

	const handleClick = (
		e: MouseEvent<HTMLUListElement> | MouseEvent<HTMLButtonElement>,
		movieId?: number
	) => {
		if (movieId) {
			mutate(movieId);
			return;
		}

		const target = e.target as HTMLElement;
		const btn = target.closest('button') as HTMLButtonElement;

		if (!btn) return;

		const id = parseInt(btn.dataset?.id ? btn.dataset.id : '0');
		mutate(id);
	};

	return {
		handleClick,
		isPending,
		isSuccess
	};
};