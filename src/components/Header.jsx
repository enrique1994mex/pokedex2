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
const ButtonSearch = styled(Button)`
	background-color: ${(props) => (props.active ? '#393838' : '#fff')};
	color: ${(props) => (props.active ? '#fff' : '#393838')};
	border: 1px solid #393838;
	width: 160px;
`

export const Header = ({ currentView, setCurrentView }) => {
	return (
		<Container>
			<TitleSearch>Pokédex</TitleSearch>
			<ContainerSearch className='row justify-content-between'>
				<div className='col-4'>
					<Search />
				</div>
				<div className='col-4 d-flex justify-content-end'>
					<ButtonSearch
						onClick={() => {
							setCurrentView(true)
						}}
						active={currentView}
					>
						Lista
					</ButtonSearch>
					<ButtonSearch
						onClick={() => {
							setCurrentView(false)
						}}
						active={!currentView}
					>
						Cuadrícula
					</ButtonSearch>
				</div>
			</ContainerSearch>
		</Container>
	)
}
