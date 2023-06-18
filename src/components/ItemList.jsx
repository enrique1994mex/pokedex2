import { useGetPokemonQuery } from '../services/pokemons'
import { Row } from './UI/Row'
import { Item } from './UI/Item'

export const ItemList = ({ pokemon, index, currentPagination }) => {
	const { data } = useGetPokemonQuery(pokemon.name)
	return (
		<Row key={pokemon.name}>
			<Item>{index + 1 + currentPagination * 5}</Item>
			<Item>{pokemon.name}</Item>
			<Item>
				<img src={data?.sprites?.front_default} />
			</Item>
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
