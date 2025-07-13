import type { MouseEventHandler } from 'react';

import { Icon } from '../Icon/Icon';

interface Props {
	className?: string;
	cb: MouseEventHandler<HTMLButtonElement>;
}

export const CloseModalButton = ({ cb }: Props) => {
	return (
		<button
			type='button'
			onClick={cb}
			className='absolute flex items-center justify-center rounded-full p-1 lg:p-3 bg-white right-5 top-0 lg:right-0 cursor-pointer'>
			<Icon name='cross' className='fill-black' />
		</button>
	);
};
