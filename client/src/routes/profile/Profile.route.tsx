import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteRegistration, getUserById } from '../../api/requests';
import { CurrentUserContext } from '../../context/CurrentUser.context';

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const fetchUser = async () => {
    if(currentUser.id == null) return;
    const user = await getUserById(currentUser.id);
    setCurrentUser(user);
    console.log(user);
  }

  const handleDelete: any = async (summitId: any) => {
    // await fetchUser();
    console.log(currentUser);
    if(currentUser._id == null) return;
    const response = await deleteRegistration(summitId, currentUser._id);
    setCurrentUser({...currentUser});
    navigate('/home');
    console.log(response);
  }

  useEffect(() => {
    fetchUser();
  }, [currentUser])
  

  return (
		<div className="vh-100 summit-page">
			<div className="dark-layer w-100 h-100 d-flex justify-content-center align-items-center">
				<div className="w-50 rounded-3 bg-light">
					<div className="content w-100 h-100 p-3">
						<h3 className="mb-4">{currentUser?.name}</h3>
						<div className="registered-summits-container">
							<h4>Registered Summits:</h4>
							{ currentUser?.registeredSummits?.map(
								(summit: any) => (
									<div className="d-flex justify-content-between align-items-center mb-2">
										<div className="fs-5">
											{summit.city} summit
										</div>
										<button
											className="btn btn-danger"
											onClick={() => handleDelete(summit._id)}
										>
											cancel registration
										</button>
									</div>
								)
							)}
						</div>
						{/* <p className="fs-4 my-0">
							date: {summit.date.substring(0, 10)}
						</p>
						<p className="fs-4 my-0">Venue: {summit.venue}</p>
						<p className="fs-4 mt-0 mb-4">
							number of attendees: {summit.numberOfAttendees}
						</p>
						<button
							className="btn btn-danger px-3 py-2"
							onClick={handleRegistration}
						>
							Register
						</button> */}
					</div>
				</div>
			</div>
		</div>
  );
}

export default Profile