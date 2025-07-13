import { useMutation } from '@tanstack/react-query';
import type { MouseEvent } from 'react';

import { useDeleteFavorite } from '@/hooks/useDeleteFavorites';

import { setAuthFormOpen } from '@/store/slices';

import { addToFavorites } from '@/api';
import { Button, Icon, Loader } from '@/components';
import { queryClient } from '@/config';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { cn } from '@/utils';

interface Props {
	id: number;
}

export const ToggleFavoriteButton = ({ id }: Props) => {
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.user);
	const isFavorite = user.favorites.includes(id.toString());

	const addFavoriteMutation = useMutation(
		{
			mutationKey: ['movie', 'favorites', 'add'],
			mutationFn: addToFavorites,
			onSuccess() {
				queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
			},
		},
		queryClient
	);

	const deleteFavoriteMutation = useDeleteFavorite(['user', 'profile']);

	const handleClick = (e: MouseEvent<HTMLButtonElement>, id: number) => {
		if (addFavoriteMutation.isError || !user.name) {
			dispatch(setAuthFormOpen(true));
		}

		if (isFavorite) {
			deleteFavoriteMutation.handleClick(e, id);
			return;
		}

		addFavoriteMutation.mutate(id);
	};

	return (
		<Button
			style={{ gridArea: 'c' }}
			variant='secondary'
			className='flex items-center justify-center w-full px-[22px] xl:px-[22px] md:max-w-[68px]'
			title='Добавить в избранное'
			onClick={(e) => handleClick(e, id)}>
			{addFavoriteMutation.isPending || deleteFavoriteMutation.isPending ? (
				<Loader />
			) : (
				<Icon
					name='heart'
					className={cn('stroke-white transition-colors', {
						['stroke-[#b4a9ff] fill-[#b4a9ff]']: isFavorite,
					})}
				/>
			)}
		</Button>
	);
};
