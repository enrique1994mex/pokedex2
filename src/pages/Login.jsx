import { useForm } from '../hooks/useForm'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
	row-gap: 2rem;
`

const Title = styled.h1`
	color: #393838;
	font-size: 3rem;
	margin-bottom: 4rem;
`

const Input = styled.input`
	border: 1px solid #393838;
	border-radius: 5px;
	padding: 10px;
	font-size: 1rem;
`

const Button = styled.button`
	color: #fff;
	background-color: #393838;
	font-size: 1rem;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
`
export const Login = () => {
	const { email, setEmail, password, setPassword, errorEmail, errorPassword } =
		useForm()

	const handleEmail = ({ target: { value } }) => {
		setEmail(value)
	}

	const handlePassword = ({ target: { value } }) => {
		setPassword(value)
	}

	return (
		<Container>
			<Title>Pokedex</Title>
			<Input
				value={email}
				onChange={handleEmail}
				placeholder='Correo Electrónico'
				type='email'
			/>
			{errorEmail && <p style={{ color: 'red' }}>{errorEmail}</p>}
			<Input
				onChange={handlePassword}
				email={password}
				placeholder='Contraseña'
				type='password'
			/>
			{errorPassword && <p style={{ color: 'red' }}>{errorPassword}</p>}
			<Button>Iniciar Sesión</Button>
		</Container>
	)
}
