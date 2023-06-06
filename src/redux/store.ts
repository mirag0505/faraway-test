import { configureStore } from '@reduxjs/toolkit'
import personsInfo from './reducers/personsInfoReducer'
import { swapiApi } from '../service'

export const store = configureStore({
  reducer: {
    personsInfo,
    [swapiApi.reducerPath]: swapiApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swapiApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
