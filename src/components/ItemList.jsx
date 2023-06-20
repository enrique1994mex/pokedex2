import { useEffect } from 'react'
import { useGetPokemonQuery } from '../services/pokemons'
import { StyledLink } from './UI/StyledLink'
import { Row } from './UI/Row'
import { Item } from './UI/Item'

export const ItemList = ({
	pokemon,
	index,
	currentPagination,
	setShiny,
	numPokemon,
}) => {
	const { data } = useGetPokemonQuery(pokemon.name)
	useEffect(() => {
		if (numPokemon === index + 1 + currentPagination * 5) {
			setShiny(data?.sprites)
		}
	}, [numPokemon])

	return (
		<Row key={pokemon.name}>
			<Item>{index + 1 + currentPagination * 5}</Item>
			<Item>{pokemon.name}</Item>
			<StyledLink to={`pokemon/${data?.name}`}>
				<Item>
					<img src={data?.sprites?.front_default} />
				</Item>
			</StyledLink>
			<Item>
				<p>{data?.types[0]?.type?.name}</p>
				<p>{data?.types[1]?.type?.name}</p>
			</Item>
			<Item>
				<p>{data?.abilities[0]?.ability?.name}</p>
				<p>{data?.abilities[1]?.ability?.name}</p>
			</Item>
		</Row>
	)
}
