import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemonsWithDetail } from '../slices/dataSlice'
import { Header } from '../components/Header'
import styled from 'styled-components'

const Container = styled.div`
	height: 100vh;
`
export const Home = () => {
	return (
		<Container>
			<Header />
		</Container>
	)
}
