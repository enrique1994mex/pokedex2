import { useRef, useState } from 'react'
import { useGetPokemonsQuery } from '../services/pokemons'
import { Header } from '../components/Header'
import { List } from '../components/List'
import { Grid } from '../components/Grid'

export const Home = () => {
	const numPokemons = useRef(100)
	const [currentView, setCurrentView] = useState(true)
	const { data } = useGetPokemonsQuery(numPokemons.current)
	return (
		<div className='container-fluid'>
			<div className='row justify-content-center'>
				<div className='col-10'>
					<Header setCurrentView={setCurrentView} currentView={currentView} />
					{currentView ? (
						<List data={data} numPokemons={numPokemons.current} />
					) : (
						<Grid data={data} />
					)}
				</div>
			</div>
		</div>
	)
}
