import { Row } from './Row'
import { ItemList } from './ItemList'
import styled from 'styled-components'

const Table = styled.div`
	display: flex;
	flex-direction: column;
	width: 85%;
`

const ItemTitle = styled.div`
	font-size: 1rem;
	color: #393838;
	text-align: center;
	font-weight: 600;
`

export const Tabla = ({ data }) => {
	return (
		<Table>
			<Row>
				<ItemTitle>#</ItemTitle>
				<ItemTitle>Nombre</ItemTitle>
				<ItemTitle>Vista Previa</ItemTitle>
				<ItemTitle>Tipos </ItemTitle>
				<ItemTitle>Habilidades</ItemTitle>
			</Row>
			{data?.results.map((pokemon, index) => (
				<ItemList key={pokemon.name} pokemon={pokemon} index={index} />
			))}
		</Table>
	)
}
