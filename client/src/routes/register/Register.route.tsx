import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLoginAPI, userRegisterAPI } from '../../api/requests';
import { CurrentUserContext } from '../../context/CurrentUser.context';
import Joi from 'joi';
import './Register.styles.scss';

const Register = () => {
	const { decodeToken, currentUser } = useContext(CurrentUserContext);
	const navigate = useNavigate();
	const [joiErrors, setJoiErrors] = useState([]);
	const [apiErrors, setApiErrors] = useState('');
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
	});

	useEffect(() => {
		if (currentUser) {
			navigate('/home');
		}
	}, [currentUser]);

	function getValuefromInput(e: any) {
		let potentialUser: any = { ...user };
		potentialUser[e.target.name] = e.target.value;
		setUser(potentialUser);
		console.log(user);
	}

	function validateForm() {
		const schema = Joi.object({
			name: Joi.string().alphanum().min(3).max(10).required(),
			email: Joi.string()
				.email({
					minDomainSegments: 2,
					tlds: { allow: ['com', 'net'] },
				})
				.required(),
			password: Joi.string()
				.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
				.required(),
		});
		return schema.validate(user, { abortEarly: false });
	}

	async function handleRegistration(e: any) {
		e.preventDefault();
		const joiResponse: any = validateForm();
		if (joiResponse.error) {
			setJoiErrors(joiResponse.error.details);
		} else {
			const response = await userRegisterAPI(user);
			console.log(response);
			if (response.message === 'success') {
				const response = await userLoginAPI(user);
				console.log(response);
				localStorage.setItem('token', response.token);
				await decodeToken();
				navigate('/home');
			} else {
				setApiErrors(response.message);
			}
		}
	}

	return (
		<div className="vh-100 container-fluid">
			<div className="row h-100 w-100">
				<div className="col-8 bg-image p-0">
					<div className="dark-layer m-0 h-100 w-100"></div>
				</div>
				<div className="col-4">
					<form
						className="d-flex flex-column justify-content-center align-items-center h-100"
						onSubmit={handleRegistration}
					>
						<div className="w-75 mb-3">
							<label className="text-light-grey" htmlFor="name">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="form-control"
								onChange={getValuefromInput}
							/>
						</div>

						<div className="w-75 mb-3">
							<label className="text-light-grey" htmlFor="email">
								Email
							</label>
							<input
								type="text"
								id="email"
								name="email"
								className="form-control"
								onChange={getValuefromInput}
							/>
						</div>

						<div className="w-75 mb-3">
							<label
								className="text-light-grey"
								htmlFor="password"
							>
								Password
							</label>
							<input
								type="text"
								id="password"
								name="password"
								className="form-control"
								onChange={getValuefromInput}
							/>
						</div>

						<div className="button-container w-100 d-flex justify-content-start ms-4 ps-5">
							<input type='submit' className="btn btn-danger" value='Register' />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
