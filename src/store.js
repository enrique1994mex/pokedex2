import { configureStore } from '@reduxjs/toolkit'
import { pokemonsApi, pokemonApi } from './services/pokemons'
// import dataReducer from './slices/dataSlice'

export const store = configureStore({
	reducer: {
		[pokemonsApi.reducerPath]: pokemonsApi.reducer,
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			pokemonsApi.middleware,
			pokemonApi.middleware,
		]),
})
