import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { UserDto } from '@/types';

interface InitialState {
	user: UserDto;
}

const initialState: InitialState = {
	user: {
		email: '',
		favorites: [],
		name: '',
		surname: '',
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserDto>) => {
			state.user = action.payload;
		},
		addFavorite: (state, action: PayloadAction<string>) => {
			state.user.favorites.push(action.payload);
		},
	},
});

export const { setUser, addFavorite } = userSlice.actions;
export const user = userSlice.reducer;
