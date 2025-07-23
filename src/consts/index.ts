import type { IInputItem, IMenuItem } from '@/types';

export const CARDS_PER_PAGE = 10;

export const MAIN_NAV_ITEMS: IMenuItem[] = [
	{
		href: '/',
		name: 'Главная',
	},
	{
		href: '/genres',
		name: 'Жанры',
	},
];

export const PROFILE_NAV_ITEMS: IMenuItem[] = [
	{
		iconName: 'heart',
		href: '/profile/favorites',
		name: 'Избранные фильмы',
	},
	{
		iconName: 'user',
		href: '/profile/settings',
		name: 'Настройка аккаунта',
	},
];

export const ADAPTIVE_PROFILE_NAV_ITEMS: IMenuItem[] = [
	{
		iconName: 'heart',
		href: '/profile/favorites',
		name: 'Избранное',
	},
	{
		iconName: 'user',
		href: '/profile/settings',
		name: 'Настройки',
	},
];

export const REGISTER_INPUTS: IInputItem[] = [
	{
		type: 'email',
		iconName: 'mail',
		name: 'email',
		required: true,
		placeholder: 'Электронная почта',
	},
	{
		type: 'text',
		iconName: 'user',
		name: 'name',
		required: false,
		placeholder: 'Имя',
	},
	{
		type: 'text',
		iconName: 'user',
		name: 'surname',
		required: false,
		placeholder: 'Фамилия',
	},
	{
		type: 'password',
		iconName: 'key',
		name: 'password',
		required: true,
		placeholder: 'Пароль',
	},
	{
		type: 'password',
		iconName: 'key',
		name: 'repeatPassword',
		required: true,
		placeholder: 'Подтвердите пароль',
	},
];

export const LOGIN_INPUTS: IInputItem[] = [
	{
		type: 'email',
		iconName: 'mail',
		name: 'email',
		required: true,
		placeholder: 'Электронная почта',
	},
	{
		type: 'password',
		iconName: 'key',
		name: 'password',
		required: true,
		placeholder: 'Пароль',
	},
];
