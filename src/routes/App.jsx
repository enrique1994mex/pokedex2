import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider, AuthRoute } from '../context/Auth'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import '../App.css'

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route
						path='/'
						element={
							<AuthRoute>
								<Home />
							</AuthRoute>
						}
					/>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App
