import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AUTH_FORM_TYPES } from '@/config';
import type { AuthFormTypes } from '@/types';

interface InitialState {
	isAuthFormOpen: boolean;
	type: 'login' | 'register';
}

const initialState: InitialState = {
	isAuthFormOpen: false,
	type: 'register',
};

const authFormSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthFormOpen: (state, action: PayloadAction<boolean>) => {
			state.isAuthFormOpen = action.payload;
		},
		toggleAuthForm: (state) => {
			state.type =
				state.type === AUTH_FORM_TYPES.login
					? AUTH_FORM_TYPES.register
					: AUTH_FORM_TYPES.login;
		},
		setAuthFormType: (state, action: PayloadAction<AuthFormTypes>) => {
			state.type = action.payload;
		},
	},
});

export const { setAuthFormOpen, toggleAuthForm, setAuthFormType } =
	authFormSlice.actions;
export const auth = authFormSlice.reducer;
