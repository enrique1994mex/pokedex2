import { useGetPokemonsQuery } from '../services/pokemons'
import { Header } from '../components/Header'
import { List } from '../components/List'
import styled from 'styled-components'

const Container = styled.div`
	height: 100vh;
`
export const Home = () => {
	const { data, error, isLoading } = useGetPokemonsQuery(10)
	return (
		<Container>
			<Header />
			<List data={data} />
		</Container>
	)
}
