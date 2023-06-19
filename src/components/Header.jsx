import { useState } from 'react'
import { Search } from './Search'
import { Button } from './UI/Button'
import { Title } from './UI/Title'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 40px;
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
`
const ButtonList = styled(Button)`
	background-color: ${(props) =>
		props.$active === 'true' ? '#393838' : '#fff'};
	color: ${(props) => (props.$active === 'true' ? '#fff' : '#393838')};
	border: 1px solid #393838;
	width: 160px;
`

const ButtonGrid = styled(Button)`
	background-color: ${(props) =>
		props.$active === 'false' ? '#393838' : '#fff'};
	color: ${(props) => (props.$active === 'false' ? '#fff' : '#393838')};
	border: 1px solid #393838;
	width: 160px;
`
export const Header = ({ currentView, setCurrentView }) => {
	const [color, setColor] = useState('true')
	return (
		<Container>
			<TitleSearch>Pokédex</TitleSearch>
			<ContainerSearch className='row justify-content-between'>
				<div className='col-4'>
					<Search />
				</div>
				<div className='col-4 d-flex justify-content-end'>
					<ButtonList
						onClick={() => {
							setCurrentView(true)
							setColor('true')
						}}
						$active={color}
					>
						Lista
					</ButtonList>
					<ButtonGrid
						onClick={() => {
							setCurrentView(false)
							setColor('false')
						}}
						$active={color}
					>
						Cuadrícula
					</ButtonGrid>
				</div>
			</ContainerSearch>
		</Container>
	)
}
