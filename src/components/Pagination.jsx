import { ButtonPage } from './ButtonPage'
import styled from 'styled-components'

const Container = styled.div`
	display: display;
	justify-content: center;
	margin-top: 1rem;
	margin-bottom: 5rem;
`
export const Pagination = ({ numPokemons, setCurrentPagination }) => {
	const numPaginations = Math.ceil(numPokemons / 5)
	const pages = []
	for (let i = 0; i < numPaginations; i++) {
		pages.push(i)
	}
	return (
		<Container>
			{pages.map((button) => (
				<ButtonPage
					key={button}
					page={button}
					setCurrentPagination={setCurrentPagination}
				/>
			))}
		</Container>
	)
}
