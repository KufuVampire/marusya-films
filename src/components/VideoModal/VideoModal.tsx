import { setVideo, setVideoOpen } from '@/store/slices';

import { Modal } from '@/components';

import { useAppDispatch, useAppSelector } from '@/hooks';

export const VideoModal = () => {
	const { isVideoOpen, video } = useAppSelector((state) => state.video);
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(setVideoOpen(false));
		dispatch(setVideo({ id: '', title: '' }));
	};

	return (
		<Modal
			cb={handleClick}
			isOpen={isVideoOpen}
			wrapperClassName='max-w-[1104px]'
			className='bg-black sm:bg-[rgba(0,0,0,.5)]'
			>
			<div className='bg-[#393b3c] sm:min-h-[540px] max-w-[960px] w-full border border-[rgba(255,255,255,.5)]'>
				{video.id && (
					<iframe
						className='w-full sm:min-h-[540px]'
						src={`https://www.youtube.com/embed/${video.id}`}
						title={video.title}
						allow='autoplay; encrypted-media'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen></iframe>
				)}
			</div>
		</Modal>
	);
};
