import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/cyber-sec-logo.png';
import { CurrentUserContext } from '../../context/CurrentUser.context';
import './Navbar.styles.scss';

const Navbar = () => {
	const { logout, currentUser } = useContext(CurrentUserContext);

	return (
		<nav className="navbar navbar-expand-lg bg-transparent navbar-dark fixed-top">
			<div className="container">
				<Link to="/" className="navbar-brand me-5">
					<img src={logo} alt="logo" className="nav-logo me-1" />
					CyberSummit
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					{!currentUser ? (
						<></>
					) : (
						<>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link className="nav-link" to="/home">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/speakers">
										Speakers
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/profile">
										Profile
									</Link>
								</li>
							</ul>
						</>
					)}
					<ul className="navbar-nav ms-auto">
						{!currentUser ? (
							<>
								<li className="nav-item">
									<Link
										to="/login"
										className="nav-link text-light-grey"
									>
										Sign in
									</Link>
								</li>
								<li className="nav-item rounded-3 px-1 bg-my-red ms-2">
									<Link
										to="/register"
										className="nav-link text-light-grey"
									>
										Register Now
									</Link>
								</li>
							</>
						) : (
							<>
								<li className="nav-item">
									<span
										onClick={logout}
										id="logout-btn"
										className="nav-link"
									>
										Logout
									</span>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
