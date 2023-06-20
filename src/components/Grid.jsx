import { useState } from 'react'
import { GridItem } from './GridItem'
import { Modal } from './Modal'
import styled from 'styled-components'

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 30px;
`

export const Grid = ({ data }) => {
	const [shiny, setShiny] = useState({})
	console.log(data)
	return (
		<Container>
			{data?.results.map((pokemon) => (
				<GridItem key={pokemon.name} name={pokemon.name} setShiny={setShiny} />
			))}
			<Modal shiny={shiny} />
		</Container>
	)
}
