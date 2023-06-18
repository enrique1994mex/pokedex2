import { useRef, useState } from 'react'
import { useGetPokemonsQuery } from '../services/pokemons'
import { Header } from '../components/Header'
import { List } from '../components/List'
import { Grid } from '../components/Grid'
import styled from 'styled-components'

const Container = styled.div`
	height: 100vh;
	max-width: 1200px;
	margin: auto;
`
export const Home = () => {
	const numPokemons = useRef(100)
	const [currentView, setCurrentView] = useState(true)
	const { data } = useGetPokemonsQuery(numPokemons.current)
	return (
		<Container>
			<Header setCurrentView={setCurrentView} currentView={currentView} />
			{currentView ? (
				<List data={data} numPokemons={numPokemons.current} />
			) : (
				<Grid data={data} />
			)}
		</Container>
	)
}
