import { Tabla } from './Tabla'
import { ItemShiny } from './ItemShiny'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 20px 70px;
`

const Table2 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 2.5rem;
	width: 15%;
`

export const List = ({ data }) => {
	return (
		<Container>
			<Tabla data={data} />
			<Table2>
				{data?.results.map((item) => (
					<ItemShiny key={item.name} />
				))}
			</Table2>
		</Container>
	)
}
