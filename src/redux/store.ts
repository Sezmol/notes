import { configureStore } from '@reduxjs/toolkit';
import { notesAPI } from './services/NotesService';
import notesSlice from './slices/notesSlice';

export const store = configureStore({
  reducer: {
    [notesAPI.reducerPath]: notesAPI.reducer,
    notesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notesAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
