import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemonsWithDetail } from '../slices/dataSlice'
export const Home = () => {
	const pokemons = useSelector((state) => state.data.pokemons)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchPokemonsWithDetail())
	}, [])
	console.log(pokemons)
	return <div>Home</div>
}
