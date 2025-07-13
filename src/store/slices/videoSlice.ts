import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { Video } from '@/types';

interface InitialState {
	isVideoOpen: boolean;
	video: Video;
}

const initialState: InitialState = {
	isVideoOpen: false,
	video: {
		title: '',
		id: '',
	},
};

const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		setVideoOpen: (state, action: PayloadAction<boolean>) => {
			state.isVideoOpen = action.payload;
		},
		setVideo: (state, action: PayloadAction<Video>) => {
			state.video = action.payload;
		},
	},
});

export const { setVideoOpen, setVideo } = videoSlice.actions;
export const video = videoSlice.reducer;
