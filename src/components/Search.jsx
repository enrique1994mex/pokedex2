import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'
import styled from 'styled-components'
import SearchSvg from '../assets/search.svg'

const Form = styled.form`
	position: relative;
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

export const Search = ({ setSearch }) => {
	const [searchInput, setSearchInput] = useState('')

	const debouncedGetPokemon = useCallback(
		debounce((search) => {
			setSearch(search)
		}, 1000),
		[]
	)

	const handleInput = ({ target: { value } }) => {
		setSearchInput(value)
		debouncedGetPokemon(value)
	}

	return (
		<Form>
			<Input value={searchInput} onChange={handleInput} />
			<Img src={SearchSvg} />
		</Form>
	)
}
