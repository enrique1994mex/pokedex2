import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonsApi = createApi({
	reducerPath: 'pokemonsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
	endpoints: (builder) => ({
		getPokemons: builder.query({
			query: (limit) => `pokemon?limit=${limit}&offset=0`,
		}),
	}),
})

export const pokemonApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
	endpoints: (builder) => ({
		getPokemon: builder.query({
			query: (name) => `pokemon/${name}`,
		}),
	}),
})

export const { useGetPokemonQuery } = pokemonApi

export const { useGetPokemonsQuery } = pokemonsApi
