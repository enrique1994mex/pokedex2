import styled from 'styled-components'
import SearchSvg from '../assets/search.svg'

const Container = styled.div`
	position: relative;
	width: 400px;
	opacity: 0.5;
`

const Input = styled.input`
	box-sizing: border-box;
	border: 1px solid #393838;
	border-radius: 5px;
	padding: 10px 15px 10px 35px;
	font-size: 1rem;
	width: 100%;
`
const Img = styled.img`
	color: #393838;
	position: absolute;
	width: 20px;
	height: 20px;
	left: 12px;
	top: 50%;
	transform: translateY(-50%);
`

export const Search = () => {
	return (
		<Container>
			<Input />
			<Img src={SearchSvg} />
		</Container>
	)
}
