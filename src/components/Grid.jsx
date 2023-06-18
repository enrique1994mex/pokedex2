import { GridItem } from './GridItem'
import styled from 'styled-components'

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 30px;
`

export const Grid = ({ data }) => {
	return (
		<Container>
			{data?.results.map((pokemon) => (
				<GridItem key={pokemon.name} name={pokemon.name} />
			))}
		</Container>
	)
}
