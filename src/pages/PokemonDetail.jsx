import { useParams } from 'react-router-dom'
import { useGetPokemonQuery } from '../services/pokemons'
import { Moves } from '../components/Moves'
import { Carousel } from '../components/Carousel'
import { Title } from '../components/UI/Title'
import { Card } from '../components/UI/Card'
import styled from 'styled-components'

const Cards = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
	color: #393838;
`
const TitleCard = styled(Title)`
	font-size: 1.5rem;
	margin-bottom: 1.5rem;
	&::first-letter {
		text-transform: uppercase;
	}
`
const Paragraph = styled.div`
	font-size: 1.2rem;
	font-weight: 600;
	&::first-letter {
		text-transform: uppercase;
	}
`
export const PokemonDetail = () => {
	const { name } = useParams()
	const { data } = useGetPokemonQuery(name)

	return (
		<div className='container-fluid'>
			<div className='row justify-content-center'>
				<div className='col-9'>
					<Carousel sprites={data?.sprites} />
					<div className='row gx-4'>
						<div className='col-8'>
							<Cards>
								<Card>
									<div className='d-flex justify-content-between'>
										<TitleCard>{data?.name}</TitleCard>
										<div className='d-flex gap-3'>
											<Paragraph>{data?.types[0]?.type?.name}</Paragraph>
											<Paragraph>{data?.types[1]?.type?.name}</Paragraph>
										</div>
									</div>
								</Card>
								<Card>
									<TitleCard>Habilidades</TitleCard>
									<p className='opacity-50'>
										Habilidad: {data?.abilities[0]?.ability?.name}
									</p>
									<p className='opacity-50'>
										Habilidad: {data?.abilities[1]?.ability?.name}
									</p>
								</Card>
							</Cards>
						</div>
						<div className='col-4'>
							<Card>
								<TitleCard>Movimientos</TitleCard>
								<Moves moves={data?.moves?.slice(0, 10)} />
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
