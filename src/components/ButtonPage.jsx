import styled from 'styled-components'

const Button = styled.button`
	background-color: #ffffff;
	color: #a3a4a8;
	border: 1px solid #a3a4a8;
	padding: 5px 10px;
	font-size: 1rem;
	border-radius: 5px;
	&:hover {
		color: #fff;
		background-color: #a3a4a8;
	}
`

export const ButtonPage = ({ page, setCurrentPagination }) => {
	return <Button onClick={() => setCurrentPagination(page)}>{page + 1}</Button>
}
