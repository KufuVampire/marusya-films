import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import {
	AuthFormModal,
	Footer,
	Header,
	RegistrationSuccessModal,
	VideoModal,
} from './components';
import { useAppDispatch, useProfile } from './hooks';
import {
	GenrePage,
	GenresPage,
	MainPage,
	MoviePage,
	ProfileFavoritesPage,
	ProfilePage,
	ProfileSettingsPage,
} from './pages';
import { setUser } from './store/slices';

export function App() {
	const dispatch = useAppDispatch();

	const { data, isSuccess, isPending } = useProfile();

	useEffect(() => {
		if (isSuccess) dispatch(setUser(data));
	}, [data, dispatch, isSuccess]);

	return (
		<BrowserRouter>
			<Header
				user={data}
				isSuccess={isSuccess}
				isPending={isPending}
			/>
			<Routes>
				<Route
					path='/'
					index
					element={<MainPage />}
				/>
				<Route
					path='genres'
					element={<GenresPage />}
				/>
				<Route
					path='/genres/:genre'
					element={<GenrePage />}
				/>
				<Route
					path='/movie/:movieId'
					element={<MoviePage />}
				/>
				<Route
					path='profile'
					element={<ProfilePage />}>
					<Route
						path='favorites'
						element={<ProfileFavoritesPage />}
					/>
					<Route
						path='settings'
						element={<ProfileSettingsPage />}
					/>
				</Route>
			</Routes>
			<AuthFormModal />
			<VideoModal />
			<RegistrationSuccessModal />
			<Footer />
		</BrowserRouter>
	);
}
