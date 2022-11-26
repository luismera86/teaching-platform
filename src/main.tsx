import './index.css'

import App from './App'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeConfig } from './config/theme.config'
import { store } from './redux/app'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeConfig>
				<App />
			</ThemeConfig>
		</Provider>
	</React.StrictMode>
)
