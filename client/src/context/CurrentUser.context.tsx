import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { redirect } from 'react-router-dom';
const type: any = {};
export const CurrentUserContext = React.createContext(type);

export default function CurrentUserContextProvider(props: any) {
	const [currentUser, setCurrentUser] = useState(null);

	function logout() {
		localStorage.removeItem('token');
		setCurrentUser(null);
		redirect('/login');
	}

	function decodeToken() {
    const token: string = localStorage.getItem('token') || '';
		const user: any = jwtDecode(token);
		setCurrentUser(user);
	}

	return (
		<CurrentUserContext.Provider
			value={{ currentUser, logout, decodeToken, setCurrentUser }}
		>
			{props.children}
		</CurrentUserContext.Provider>
	);
}
