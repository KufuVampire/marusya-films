import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://cinemaguide.skillbox.cc/',
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});
