export interface UserDto {
	name: string;
	surname: string;
	email: string;
	favorites: string[];
}

export interface LoginUserDto {
	email: string;
	password: string;
}

export interface CreateUserDto {
	email: string;
	password: string;
	name?: string;
	surname?: string;
}

export interface SuccessfulResponse {
	result: boolean;
}

export interface ErrorResponse {
	error: string;
}

export interface ApiResponse {
	code: number;
	type: string;
	message: string;
}

export interface MovieDto {
	id: number;
	title: string;
	originalTitle: string;
	language: string;
	relaseYear: number;
	releaseDate: Date;
	genres: string[];
	plot: string;
	runtime: number;
	budget: string;
	revenue: string;
	status: string;
	posterUrl: string;
	backdropUrl: string;
	trailerUrl: string;
	trailerYouTubeId: string;
	tmdbRating: number;
	searchL: string;
	keywords: string[];
	countriesOfOrigin: string[];
	languages: string[];
	cast: string[];
	director: string;
	production: string;
	awardsSummary: string;
}

export type IconTypes =
	| 'arrowRight'
	| 'cross'
	| 'genres'
	| 'heart'
	| 'key'
	| 'mail'
	| 'ok'
	| 'search'
	| 'star'
	| 'switchArrows'
	| 'telegram'
	| 'user'
	| 'vk'
	| 'youtube';

export interface IMenuItem {
	iconName?: IconTypes;
	name: string;
	href: string;
}

export type MovieCardType = 'favorites' | 'top10' | 'genre';

export interface IInputs {
	email: string;
	name: string;
	surname: string;
	password: string;
	repeatPassword: string;
}

export interface IInputItem {
	type: string;
	iconName: IconTypes;
	name: keyof IInputs;
	required: boolean;
	placeholder: string;
}

export interface Video {
	title: string;
	id: string;
}

export interface MovieParams {
	title?: string;
	genre?: string;
	page?: number;
	per_page?: number;
}

export type AuthFormTypes = 'login' | 'register'
