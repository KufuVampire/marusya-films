import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
	isRegistrationSuccessFormOpen: boolean;
}

const initialState: InitialState = {
	isRegistrationSuccessFormOpen: false,
};

const registrationSuccess = createSlice({
	name: 'registrationSuccess',
	initialState,
	reducers: {
		setRegistrationSuccessFormOpen: (state, action: PayloadAction<boolean>) => {
			state.isRegistrationSuccessFormOpen = action.payload;
		},
	},
});

export const { setRegistrationSuccessFormOpen } = registrationSuccess.actions;
export const success = registrationSuccess.reducer;
