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
	margin: 35px 0px;
`

export const Tabla = ({ data, currentPagination }) => {
	return (
		<Table>
			<Row>
				<ItemTitle>#</ItemTitle>
				<ItemTitle>Nombre</ItemTitle>
				<ItemTitle>Vista Previa</ItemTitle>
				<ItemTitle>Tipos </ItemTitle>
				<ItemTitle>Habilidades</ItemTitle>
			</Row>
			{data?.results
				.slice(currentPagination * 5, (currentPagination + 1) * 5)
				.map((pokemon, index) => (
					<ItemList
						key={pokemon.name}
						pokemon={pokemon}
						index={index}
						currentPagination={currentPagination}
					/>
				))}
		</Table>
	)
}
