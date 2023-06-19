import { useState } from 'react'
import { TableItems } from './Table'
import { Button } from './UI/Button'
import { Pagination } from './Pagination'
import { Modal } from './Modal'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`

const Table2 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3.5rem;
	row-gap: 3.5rem;
	width: 15%;
`

const ButtonShiny = styled(Button)`
	padding: 5px 10px;
	width: auto;
`

export const List = ({ data, numPokemons }) => {
	const [currentPagination, setCurrentPagination] = useState(0)
	const [shiny, setShiny] = useState({})
	const [numPokemon, setNumPokemon] = useState(0)

	const handleNumPokemon = (index) => {
		setNumPokemon(index + currentPagination * 5)
	}

	return (
		<Container>
			<TableItems
				data={data}
				currentPagination={currentPagination}
				setShiny={setShiny}
				numPokemon={numPokemon}
			/>
			<Table2>
				<ButtonShiny
					data-bs-toggle='modal'
					data-bs-target='#pokemonModal'
					onClick={() => handleNumPokemon(1)}
				>
					Shiny
				</ButtonShiny>
				<ButtonShiny
					data-bs-toggle='modal'
					data-bs-target='#pokemonModal'
					onClick={() => handleNumPokemon(2)}
				>
					Shiny
				</ButtonShiny>
				<ButtonShiny
					data-bs-toggle='modal'
					data-bs-target='#pokemonModal'
					onClick={() => handleNumPokemon(3)}
				>
					Shiny
				</ButtonShiny>
				<ButtonShiny
					data-bs-toggle='modal'
					data-bs-target='#pokemonModal'
					onClick={() => handleNumPokemon(4)}
				>
					Shiny
				</ButtonShiny>
				<ButtonShiny
					data-bs-toggle='modal'
					data-bs-target='#pokemonModal'
					onClick={() => handleNumPokemon(5)}
				>
					Shiny
				</ButtonShiny>
			</Table2>
			<Pagination
				numPokemons={numPokemons}
				setCurrentPagination={setCurrentPagination}
			/>
			<Modal shiny={shiny} />
		</Container>
	)
}
