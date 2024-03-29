import { configureStore } from '@reduxjs/toolkit';
import postReducer from './post';

export const store = configureStore({
  reducer: {
    postReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
