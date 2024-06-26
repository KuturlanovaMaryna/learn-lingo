import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import favoritesSlice from './favorites/favorite.slice';

const PersistConfig = {
  key: 'card',
  storage,
  whitelist: ['favorites'],
};
const PersistedReducer = persistReducer(PersistConfig, favoritesSlice);

export const store = configureStore({
  reducer: {
    favorites: PersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
