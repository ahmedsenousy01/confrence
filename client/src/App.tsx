import React, { useContext, useCallback, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './routes/404/NotFound.route';
import Home from './routes/home/Home.route';
import Register from './routes/register/Register.route';
import Speakers from './routes/speakers/Speakers.route';
import Navbar from './components/navbar/Navbar.component';
import Login from './routes/login/Login.route';
import Summit from './routes/summit/Summit.route';
import ProtectedRoute from './components/protected-route/ProtectedRoute.component';
import { CurrentUserContext } from './context/CurrentUser.context';
import Profile from './routes/profile/Profile.route';

function App() {
	const { decodeToken } = useContext(CurrentUserContext);

	const isLoggedIn = useCallback(() => {
		if (localStorage.getItem('token')) {
			decodeToken();
		}
	}, []);

	useEffect(() => {
		isLoggedIn();
	}, [isLoggedIn]);

	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/home"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/profile"
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
				<Route path="/summits">
					<Route
						index
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						path=":id"
						element={
							<ProtectedRoute>
								<Summit />
							</ProtectedRoute>
						}
					/>
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/speakers"
					element={
						<ProtectedRoute>
							<Speakers />
						</ProtectedRoute>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
