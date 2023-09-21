import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { itemsSlice } from './slices'

export type AppDispatch = typeof store.dispatch

const persistConfig = {
  key: 'root',
  storage,
}

const persistedItemsReducer = persistReducer(persistConfig, itemsSlice.reducer)

export const store = configureStore({
  reducer: {
    items: persistedItemsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
