export const getPokemons = async () => {
	try {
		const response = await fetch(
			'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
		)
		const json = await response.json()
		console.log(json.results)
		return json.results
	} catch (error) {
		throw new Error('Error gettting pokemons')
	}
}

export const getPokemonDetails = async (pokemon) => {
	try {
		const response = await fetch(pokemon.url)
		const json = await response.json()
		return json
	} catch (error) {
		throw new Error('Error gettting pokemon')
	}
}
