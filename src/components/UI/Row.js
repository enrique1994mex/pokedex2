import styled from 'styled-components'

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	align-items: center;
	border-top: 1px solid rgba(57, 56, 56, 0.5);
	border-left: 1px solid rgba(57, 56, 56, 0.5);
	border-right: 1px solid rgba(57, 56, 56, 0.5);
	&:last-child {
		border-bottom: 1px solid rgba(57, 56, 56, 0.5);
	}
	&:nth-child(odd) {
		background-color: #f9fafe;
	}
	&:first-child {
		background-color: #f1f2f9;
	}
`
