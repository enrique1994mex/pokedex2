import { useRef } from 'react'
import { useGetPokemonsQuery } from '../services/pokemons'
import { Header } from '../components/Header'
import { List } from '../components/List'
import styled from 'styled-components'

const Container = styled.div`
	height: 100vh;
`
export const Home = () => {
	const numPokemons = useRef(100)
	const { data } = useGetPokemonsQuery(numPokemons.current)
	return (
		<Container>
			<Header />
			<List data={data} numPokemons={numPokemons.current} />
		</Container>
	)
}
