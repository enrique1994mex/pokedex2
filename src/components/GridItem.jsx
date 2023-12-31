import { useEffect, useRef, useState } from 'react'
import { useGetPokemonQuery } from '../services/pokemons'
import { StyledLink } from './UI/StyledLink'
import { Button } from './UI/Button'
import { Card } from './UI/Card'
import styled from 'styled-components'

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
export const GridItem = ({ name, setShiny }) => {
	const [namePokemon, setNamePokemon] = useState(null)
	const node = useRef(null)
	const { data } = useGetPokemonQuery(namePokemon)

	useEffect(() => {
		// nuevo observador
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// onIntersectionObserver
				if (entry.isIntersecting) {
					setNamePokemon(name)
				}
			})
		})

		// observer node
		if (node.current) {
			observer.observe(node.current)
		}
		// desconectar
		return () => {
			observer.disconnect()
		}
	}, [name])

	const handleShiny = () => {
		setShiny(data?.sprites)
	}

	return (
		<Card ref={node}>
			<StyledLink to={`pokemon/${data?.name}`}>
				<img src={data?.sprites?.front_default} />
				<Title>{name}</Title>
				<Info>
					<Paragraph>{data?.abilities[0]?.ability?.name}</Paragraph>
					<Paragraph>{data?.abilities[1]?.ability?.name}</Paragraph>
				</Info>
			</StyledLink>
			<Footer>
				<InfoTypes>
					<Paragraph>{data?.types[0]?.type?.name}</Paragraph>
					<Paragraph>{data?.types[1]?.type?.name}</Paragraph>
				</InfoTypes>
				<ButtonShiny
					data-bs-toggle='modal'
					data-bs-target='#pokemonModal'
					onClick={handleShiny}
				>
					Shiny
				</ButtonShiny>
			</Footer>
		</Card>
	)
}
