import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'
import './styles/index.scss'
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
)
