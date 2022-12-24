import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUser.context';
import Joi from 'joi';
import './Login.styles.scss'
import { userLoginAPI } from '../../api/requests';

const Login = () => {

	const { decodeToken, currentUser } = useContext(CurrentUserContext);
	const navigate = useNavigate();
	const [joiErrors, setJoiErrors] = useState([]);
	const [apiErrors, setApiErrors] = useState('');
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	function getValuefromInput(e: any) {
		let potentialUser: any = { ...user };
		potentialUser[e.target.name] = e.target.value;
		setUser(potentialUser);
		console.log(user);
	}

	function validateForm() {
		const schema = Joi.object({
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

	async function handleLogin(e: any) {
		e.preventDefault();
		const joiResponse: any = validateForm();
		if (joiResponse.error) {
			setJoiErrors(joiResponse.error.details);
		} else {
			const response = await userLoginAPI(user);
			console.log(response);
			if (response.message === 'signin successful') {
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
				<div className="col-4">
					<form
						className="d-flex flex-column justify-content-center align-items-center h-100"
						onSubmit={handleLogin}
					>
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
							<input value='Sign in' type="submit" className="btn btn-danger" />
						</div>
					</form>
				</div>
				<div className="col-8 bg-img p-0">
					<div className="dark-layer m-0 h-100 w-100"></div>
				</div>
			</div>
		</div>
  );
}

export default Login