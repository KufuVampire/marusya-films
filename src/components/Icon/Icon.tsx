import type { SVGProps } from 'react';

import {
	ArrowRightIcon,
	CrossIcon,
	GenresIcon,
	HeartIcon,
	KeyIcon,
	MailIcon,
	OkIcon,
	SearchIcon,
	StarIcon,
	SwitchArrowsIcon,
	TelegramIcon,
	UserIcon,
	VkIcon,
	YoutubeIcon,
} from './Icons';
import type { IconTypes } from '@/types';

interface Props extends SVGProps<SVGSVGElement> {
	name: IconTypes;
}

const iconsConfig = {
	arrowRight: ArrowRightIcon,
	cross: CrossIcon,
	genres: GenresIcon,
	heart: HeartIcon,
	key: KeyIcon,
	mail: MailIcon,
	ok: OkIcon,
	search: SearchIcon,
	star: StarIcon,
	switchArrows: SwitchArrowsIcon,
	telegram: TelegramIcon,
	user: UserIcon,
	vk: VkIcon,
	youtube: YoutubeIcon,
};

export const Icon = ({ name, ...props }: Props) => {
	const SVGIcon = iconsConfig[name];
	return <SVGIcon {...props} />;
};
