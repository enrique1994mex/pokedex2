import { useState, useEffect, createContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const navigate = useNavigate()
	const [user, setUser] = useState(null)

	const login = ({ email, password }) => {
		setUser({ email, password })
		localStorage.setItem('user', JSON.stringify({ email, password }))
		navigate('/')
	}

	useEffect(() => {
		const localStorageUser = localStorage.getItem('user')
		if (localStorageUser) {
			const parsedUser = JSON.parse(localStorageUser)
			setUser(parsedUser)
		}
	}, [])

	const auth = { user, login }
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

const AuthRoute = (props) => {
	const { user } = useAuth()
	if (!user) {
		return <Navigate to='/login' />
	}
	return props.children
}

export { AuthProvider, AuthContext, AuthRoute }
