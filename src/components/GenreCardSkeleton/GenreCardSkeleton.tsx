import { Heading } from '../Heading/Heading';

export const GenreCardSkeleton = () => {
	return (
		<li className='flex flex-col max-w-[290px] w-full min-h-[304px] rounded-3xl bg-[#616161] shadow-card border-card overflow-hidden'>
			<div className='flex flex-col grow'>
				<div className='bg-transparent w-full h-full max-h-[220px]' />
				<div className='bg-[#0a0b0b] w-full flex items-center self-end justify-center max-h-[84px] grow'>
					<Heading
						As='h3'
						className=''
						text={'Жанр'}
					/>
				</div>
			</div>
		</li>
	);
};
