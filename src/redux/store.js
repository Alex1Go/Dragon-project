import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './rocketsSlice';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  // devTools: import.meta.env.VITE_NODE_ENV === 'development',
});
// export const persistor = persistStore(store);
