import { Button } from './Button'
import styled from 'styled-components'

const ButtonShiny = styled(Button)`
	padding: 0px;
	width: 50px;
`

export const ItemShiny = () => {
	return <ButtonShiny>Shiny</ButtonShiny>
}
