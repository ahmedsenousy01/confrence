import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CurrentUserContextProvider from './context/CurrentUser.context';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import 'bootstrap/dist/js/bootstrap.bundle';

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CurrentUserContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CurrentUserContextProvider>
	</React.StrictMode>
);
