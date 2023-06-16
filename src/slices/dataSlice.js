import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemons, getPokemonDetails } from '../api'

const initialState = {
	pokemons: [],
}

export const fetchPokemonsWithDetail = createAsyncThunk(
	'data/fetchPokemonsWithDetail',
	async (_, { dispatch }) => {
		const pokemonRes = await getPokemons()
		const pokemonsDetails = await Promise.all(
			pokemonRes.map((pokemon) => getPokemonDetails(pokemon))
		)
		dispatch(setPokemons(pokemonsDetails))
	}
)

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setPokemons: (state, action) => {
			state.pokemons = action.payload
		},
	},
})

export const { setPokemons } = dataSlice.actions

export default dataSlice.reducer
