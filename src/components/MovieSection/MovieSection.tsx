import type {
	QueryObserverResult,
	RefetchOptions,
} from '@tanstack/react-query';
import { Link } from 'react-router';

import { setVideo, setVideoOpen } from '@/store/slices';

import {
	Button,
	Container,
	Heading,
	Icon,
	Rating,
	Section,
	ToggleFavoriteButton,
} from '@/components';
import { PAGE_ROUTES } from '@/config';
import { useAppDispatch } from '@/hooks';
import type { MovieDto, Video } from '@/types';
import { cn, formatRuntime } from '@/utils';

import styles from './styles.module.css';

interface Props {
	page?: 'main' | 'movie';
	data: MovieDto | undefined;
	refetch?: (
		options?: RefetchOptions
	) => Promise<QueryObserverResult<MovieDto, Error>>;
	classNameBtnWrapper?: string;
}

export const MovieSection = ({
	data,
	page = 'main',
	refetch,
	classNameBtnWrapper,
}: Props) => {
	const dispatch = useAppDispatch();

	if (!data) return;

	const handleOpenTrailer = () => {
		const video: Video = {
			id: data.trailerYouTubeId,
			title: data.title,
		};
		dispatch(setVideo(video));
		dispatch(setVideoOpen(true));
	};

	return (
		<Section className={cn('pt-8 pb-0 md:pb-0 md:pt-0')}>
			<Container className='grid grid-cols-1 lg:grid-cols-2 gap-x-5'>
				<div className='w-full flex flex-col justify-center gap-y-8 lg:gap-y-[60px] py-6 lg:py-[60px] order-2 lg:order-1'>
					<div className='flex flex-col gap-y-3 lg:gap-y-4'>
						<div className='flex items-center gap-x-4'>
							<Rating rating={data.tmdbRating} />
							<span className='text-[rgba(255,255,255,.7)] text-sm leading-5 lg:text-lg lg:leading-6'>
								{new Date(data.releaseDate).getFullYear()}
							</span>
							<span className='text-[rgba(255,255,255,.7)] text-sm leading-5 lg:text-lg lg:leading-6'>
								{data.genres[0]}
							</span>
							<span className='text-[rgba(255,255,255,.7)] text-sm leading-5 lg:text-lg lg:leading-6'>
								{formatRuntime(data.runtime)}
							</span>
						</div>
						<Heading
							As='h1'
							className='min-h-16'
							text={data.title}
						/>
						<p
							className={cn(
								'text-[rgba(255,255,255,.7)] text-2xl leading-8 overflow-hidden overflow-ellipsis',
								{
									'line-clamp-2 min-h-12 xl:line-clamp-5 xl:min-h-[162px]':
										page === 'main',
								}
							)}>
							{data.plot}
						</p>
					</div>
					<div
						className={cn(
							'grid gap-4',
							styles.btn__wrapper,
							classNameBtnWrapper
						)}>
						<Button
							onClick={handleOpenTrailer}
							style={{ gridArea: 'a' }}>
							Трейлер
						</Button>
						{page === 'main' && (
							<Link
								to={PAGE_ROUTES.movieById(data.id)}
								style={{ gridArea: 'b' }}
								className='text-white text-center text-lg leading-6 cursor-pointer py-4 px-8 xl:px-12 block bg-[#393b3c] disabled:bg-[#747474] rounded-[28px] text-nowrap w-full md:max-w-[183px]'>
								О фильме
							</Link>
						)}
						<ToggleFavoriteButton id={data.id} />
						{page === 'main' && refetch && (
							<Button
								style={{ gridArea: 'd' }}
								variant='secondary'
								className='flex items-center justify-center px-[22px] xl:px-[22px] xl:max-w-[68px]'
								onClick={() => refetch()}
								title='Сменить фильм'>
								<Icon name='switchArrows' />
							</Button>
						)}
					</div>
				</div>
				<img
					src={data.posterUrl}
					alt={data.title}
					className='rounded-2xl min-h-[260px] lg:max-w-[680px] max-h-[234px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[552px] w-full h-full bg-[#393b3c] order-1 lg:order-2'
				/>
			</Container>
		</Section>
	);
};
