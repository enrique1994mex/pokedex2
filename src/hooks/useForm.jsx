import { useState, useEffect, useRef } from 'react'
export const useForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorEmail, setErrorEmail] = useState('')
	const [errorPassword, setErrorPassword] = useState('')
	const isFirstPassword = useRef(true)
	const isFirstEmail = useRef(true)

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

	return { email, setEmail, password, setPassword, errorEmail, errorPassword }
}
