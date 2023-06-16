import { useState, useEffect, useRef } from 'react'
export const useForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorEmail, setErrorEmail] = useState('')
	const [errorPassword, setErrorPassword] = useState('')
	const error = useRef(true)

	const onErrorEmail = (email) => {
		if (email === '') {
			setErrorEmail('Este campo no puede estar vacío')
			error.current = true
			return
		}
		if (!email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
			setErrorEmail('Introduce un correo electrónico válido')
			error.current = true
			return
		}
		error.current = false
	}

	const onErrorPassword = (password) => {
		if (password === '') {
			setErrorPassword('Este campo no puede estar vacío')
			error.current = true
			return
		}
		if (password.length < 7) {
			setErrorPassword('Introduzca una contraseña válida')
			error.current = true
			return
		}
		error.current = false
	}

	useEffect(() => {
		setErrorEmail('')
		setErrorPassword('')
	}, [email, password])

	return {
		email,
		setEmail,
		password,
		setPassword,
		errorEmail,
		onErrorEmail,
		errorPassword,
		onErrorPassword,
		error,
	}
}
