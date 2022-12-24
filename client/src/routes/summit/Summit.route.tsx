import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getConfrenceById, registerToConfrence } from '../../api/requests';
import { CurrentUserContext } from '../../context/CurrentUser.context';
import './Summit.styles.scss';

const Summit = () => {
	const { id } = useParams();
  const navigate = useNavigate();
	const { currentUser } = useContext(CurrentUserContext);
	const [summit, setSummit] = useState({
		_id: '',
		city: '',
		date: '',
		numberOfAttendees: '',
		venue: '',
		cardImageUrl: '',
		bannerImageUrl: '',
	});

	const handleRegistration = async () => {
    if(currentUser.id == null) return;
		const response = await registerToConfrence(summit._id, currentUser.id);
    navigate('/home')
    console.log(response);
	};

	useEffect(() => {
		const fetchData = async () => {
			return await getConfrenceById(id);
		};
		(async () => {
			const newSummit = await fetchData();
			setSummit(newSummit.summit);
		})();
	}, [currentUser]);

	return (
		<div className="vh-100 summit-page">
			<div className="dark-layer w-100 h-100 d-flex justify-content-center align-items-center">
				<div className="w-50 rounded-3 bg-light">
					<img
						src={summit.bannerImageUrl}
						alt="banner"
						className="w-100 rounded-3"
					/>
					<div className="content w-100 h-100 p-3">
						<h3 className="mb-2">{summit.city} Summit</h3>
						<p className="fs-4 my-0">
							date: {summit.date? summit.date.substring(0, 10): 'To Be Announced'}
						</p>
						<p className="fs-4 my-0">Venue: {summit.venue? summit.venue : 'To Be Announced'}</p>
						<p className="fs-4 mt-0 mb-4">
							number of attendees: {summit.numberOfAttendees}
						</p>
						<button
							className="btn btn-danger px-3 py-2"
							onClick={handleRegistration}
						>
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Summit;
