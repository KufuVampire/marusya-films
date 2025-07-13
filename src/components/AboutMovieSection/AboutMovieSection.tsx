import { Container, Heading, Section } from '@/components';
import type { MovieDto } from '@/types';

interface Props {
	data: MovieDto;
}

function getInfoItems(data: MovieDto) {
	return [
		{
			title: 'Язык оригинала',
			value: data.language,
		},
		{
			title: 'Бюджет',
			value: data.budget ? `${data.budget} руб.` : null,
		},
		{
			title: 'Выручка',
			value: data.revenue ? `${data.revenue} руб.` : null,
		},
		{
			title: 'Режиссёр',
			value: data.director,
		},
		{
			title: 'Продакшен',
			value: data.production,
		},
		{
			title: 'Награды',
			value: data.awardsSummary,
		},
	];
}

export const AboutMovieSection = ({ data }: Props) => {
	const infoItems = getInfoItems(data);

	return (
		<Section className='py-8 md:pt-10 md:pb-[120px]'>
			<Container className='flex flex-col gap-y-10 sm:gap-y-16'>
				<Heading
					text='О фильме'
				/>
				<ul className='w-full flex flex-col gap-y-3 sm:gap-y-6'>
					{infoItems.map((item, i) => (
						<li
							className='flex flex-col sm:flex-row sm:items-center gap-y-1 :gap-y-0 gap-x-2 max-w-[500px] w-full'
							key={i}>
							<p className='flex items-center gap-x-2 text-nowrap w-full sm:after:w-full sm:after:h-0.5 sm:after:border-b sm:after:border-[rgba(255,255,255,.5)] sm:after:border-dotted text-[rgba(255,255,255,.5)] sm:text-white text-sm leading-5 sm:text-lg sm:leading-6'>
								{item.title}
							</p>
							<p className='text-nowrap text-white sm:text-lg sm:leading-6'>{item.value}</p>
						</li>
					))}
				</ul>
			</Container>
		</Section>
	);
};
