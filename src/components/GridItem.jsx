import { useGetPokemonQuery } from '../services/pokemons'
import { Button } from './UI/Button'
import styled from 'styled-components'

const Cart = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(57, 56, 56, 0.5);
	padding: 10px 15px;
`
const Title = styled.h2`
	color: #393838;
	font-size: 1.5rem;
	&::first-letter {
		text-transform: uppercase;
	}
`
const Info = styled.div`
	display: flex;
	justify-content: space-between;
	&::first-letter {
		text-transform: uppercase;
	}
`
const InfoTypes = styled.div`
	display: flex;
	column-gap: 1rem;
`
const ButtonShiny = styled(Button)`
	padding: 5px 10px;
	width: 100px;
`
const Footer = styled.div`
	display: flex;
	justify-content: space-between;
`

const Paragraph = styled.p`
	color: #393838;
	font-size: 1rem;
	&::first-letter {
		text-transform: uppercase;
	}
`
export const GridItem = ({ name }) => {
	const { data } = useGetPokemonQuery(name)
	return (
		<Cart>
			<img src={data?.sprites?.front_default} />
			<Title>{name}</Title>
			<Info>
				<Paragraph>{data?.abilities[0]?.ability?.name}</Paragraph>
				<Paragraph>{data?.abilities[1]?.ability?.name}</Paragraph>
			</Info>
			<Footer>
				<InfoTypes>
					<Paragraph>{data?.types[0]?.type?.name}</Paragraph>
					<Paragraph>{data?.types[1]?.type?.name}</Paragraph>
				</InfoTypes>
				<ButtonShiny>Shiny</ButtonShiny>
			</Footer>
		</Cart>
	)
}