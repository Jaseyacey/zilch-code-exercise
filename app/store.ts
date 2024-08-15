import { configureStore } from '@reduxjs/toolkit';
import debitCardReducer from './debitCardSlice';

export const store = configureStore({
  reducer: {
    debitCard: debitCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
