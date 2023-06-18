import { useForm } from '../hooks/useForm'
import { Button } from '../components/UI/Button'
import { Title } from '../components/UI/Title'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
`

const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	row-gap: 2rem;
`

const Input = styled.input`
	border: 1px solid #393838;
	border-radius: 5px;
	padding: 10px;
	font-size: 1rem;
`

export const Login = () => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		errorEmail,
		onErrorEmail,
		errorPassword,
		onErrorPassword,
		error,
	} = useForm()

	const handleEmail = ({ target: { value } }) => {
		setEmail(value)
	}

	const handlePassword = ({ target: { value } }) => {
		setPassword(value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		onErrorEmail(email)
		onErrorPassword(password)
		if (email && password && !error.current) {
			console.log('Aqui pasa la prueba')
			const data = {
				email,
				password,
			}
			console.log(data)
		}
	}

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
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
			</Form>
		</Container>
	)
}
