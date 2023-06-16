import { useState, useEffect, useRef } from 'react'
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
const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorEmail, setErrorEmail] = useState('')
	const [errorPassword, setErrorPassword] = useState('')
	const isFirstPassword = useRef(true)
	const isFirstEmail = useRef(true)

	const handleEmail = ({ target: { value } }) => {
		setEmail(value)
	}

	const handlePassword = ({ target: { value } }) => {
		setPassword(value)
	}

	useEffect(() => {
		if (isFirstPassword.current) {
			isFirstPassword.current = password === ''
			return
		}
		if (password === '') {
			setErrorPassword('Este campo no puede estar vacío')
			return
		}
		if (password.length < 7) {
			setErrorPassword('Introduzca una contraseña válida')
			return
		}

		setErrorPassword('')
	}, [password])

	useEffect(() => {
		if (isFirstEmail.current) {
			isFirstEmail.current = email === ''
			return
		}
		if (email === '') {
			setErrorEmail('Este campo no puede estar vacío')
			return
		}
		if (!email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
			setErrorEmail('Introduce un correo electrónico válido')
			return
		}

		setErrorEmail('')
	}, [email])
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

export default Login
