import { Link } from 'react-router';

import { Container } from '../Container/Container';
import { Icon } from '../Icon/Icon';

import { PAGE_ROUTES } from '@/config';

type IconTypes = 'ok' | 'telegram' | 'vk' | 'youtube';

const socialIconTypes: IconTypes[] = ['vk', 'youtube', 'ok', 'telegram'];

export const Footer = () => {
	return (
		<footer className='py-6 md:py-[42px]'>
			<Container className='flex items-center lg:justify-end'>
				<ul className='flex items-center justify-center gap-x-6'>
					{socialIconTypes.map((item, i) => (
						<li key={i}>
							<Link to={PAGE_ROUTES.home}>
								<Icon name={item} />
							</Link>
						</li>
					))}
				</ul>
			</Container>
		</footer>
	);
};
