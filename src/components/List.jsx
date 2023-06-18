import { useState } from 'react'
import { TableItems } from './Table'
import { Button } from './UI/Button'
import { Pagination } from './Pagination'
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
	return (
		<Container>
			<TableItems data={data} currentPagination={currentPagination} />
			<Table2>
				<ButtonShiny>Shiny</ButtonShiny>
				<ButtonShiny>Shiny</ButtonShiny>
				<ButtonShiny>Shiny</ButtonShiny>
				<ButtonShiny>Shiny</ButtonShiny>
				<ButtonShiny>Shiny</ButtonShiny>
			</Table2>
			<Pagination
				numPokemons={numPokemons}
				setCurrentPagination={setCurrentPagination}
			/>
		</Container>
	)
}
