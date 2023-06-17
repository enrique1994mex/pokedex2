import { Search } from './Search'
import { Button } from './Button'
import { Title } from './Title'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px 70px;
`

const TitleSearch = styled(Title)`
	font-size: 2rem;
	margin-top: 2.5rem;
	margin-bottom: 1.5rem;
	opacity: 0.9;
`
const ContainerSearch = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const ButtonGrid = styled(Button)`
	background-color: #fff;
	color: #393838;
	border: 1px solid #393838;
`

export const Header = () => {
	return (
		<Container>
			<TitleSearch>Pokédex</TitleSearch>
			<ContainerSearch>
				<Search />
				<div>
					<Button>Lista</Button>
					<ButtonGrid>Cuadrícula</ButtonGrid>
				</div>
			</ContainerSearch>
		</Container>
	)
}
