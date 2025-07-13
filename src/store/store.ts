import { configureStore } from '@reduxjs/toolkit';

import { auth, success, user, video } from './slices';

export const store = configureStore({
	reducer: {
		auth,
		user,
		video,
		success,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
