import styled from 'styled-components'

const Title = styled.div`
	font-size: 1.3rem;
	font-weight: 700;
	color: #393838;
	&::first-letter {
		text-transform: uppercase;
	}
`
const Card = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid rgba(57, 56, 56, 0.5);
	padding-bottom: 15px;
`
const Card2 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Paragraph = styled.div`
	font-size: 1.3rem;
	font-weight: 900;
	opacity: 0.5;
	&::first-letter {
		text-transform: uppercase;
	}
`
export const Moves = ({ moves }) => {
	return (
		<>
			{moves?.map(({ move, version_group_details: details }) => (
				<div key={move.name} className='my-3'>
					<Title>{move.name}</Title>
					<Card>
						<Card2>
							<Paragraph>Poder</Paragraph>
							<Paragraph>{details[0]?.level_learned_at}</Paragraph>
						</Card2>
						<Card2>
							<Paragraph>Presición</Paragraph>
							<Paragraph>{details[0]?.level_learned_at}</Paragraph>
						</Card2>
						<Card2>
							<Paragraph>Tipo</Paragraph>
							<Paragraph>{details[0]?.version_group.name}</Paragraph>
						</Card2>
					</Card>
				</div>
			))}
		</>
	)
}
