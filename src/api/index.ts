import { API_ROUTES, SEARCH_PARAMS, instance } from '@/config';
import type {
	CreateUserDto,
	ErrorResponse,
	LoginUserDto,
	MovieDto,
	MovieParams,
	SuccessfulResponse,
	UserDto,
} from '@/types';

export async function login(
	data: LoginUserDto
): Promise<SuccessfulResponse | ErrorResponse> {
	const res = await instance.post(API_ROUTES.login, data);

	return res.data;
}

export async function createUser(
	data: CreateUserDto
): Promise<SuccessfulResponse | ErrorResponse> {
	const res = await instance.post(API_ROUTES.createUser, data);

	return res.data;
}

export async function logout(): Promise<SuccessfulResponse> {
	const res = await instance.get(API_ROUTES.logout);

	return res.data;
}

export async function getProfile(): Promise<UserDto> {
	const res = await instance.get(API_ROUTES.profile);

	return res.data;
}

export async function getFavorites(): Promise<MovieDto[]> {
	const res = await instance.get(API_ROUTES.favorites);

	return res.data;
}

export async function addToFavorites(
	id: number
): Promise<SuccessfulResponse | ErrorResponse> {
	const res = await instance.post(API_ROUTES.favorites, { id: id.toString() });

	return res.data;
}

export async function deleteFavoriteById(id: number): Promise<UserDto> {
	const res = await instance.delete(API_ROUTES.deleteFavorite(id));

	return res.data;
}

export async function getMovies({
	title,
	genre,
	per_page,
	page,
}: MovieParams): Promise<MovieDto[]> {
	const res = await instance.get(
		`${API_ROUTES.movie}?${SEARCH_PARAMS.genre}=${genre}&${SEARCH_PARAMS.title}=${title}&${SEARCH_PARAMS.per_page}=${per_page}&${SEARCH_PARAMS.page}=${page}`
	);

	return res.data;
}

export async function getTop10Movies(): Promise<MovieDto[]> {
	const res = await instance.get(API_ROUTES.top10);

	return res.data;
}

export async function getGenres(): Promise<string[]> {
	const res = await instance.get(API_ROUTES.genres);

	return res.data;
}

export async function getMovieById(id: string): Promise<MovieDto> {
	const res = await instance.get(API_ROUTES.movieById(id));

	return res.data;
}

export async function getRandomMovie(): Promise<MovieDto> {
	const res = await instance.get(API_ROUTES.random);

	return res.data;
}
