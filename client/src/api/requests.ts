import axios from 'axios';

export async function userLoginAPI(user: any) {
	const { data } = await axios.post(
		'http://localhost:5000/users/login',
		user
	);
	return data;
}

export async function userRegisterAPI(user: any) {
	const { data } = await axios.post(
		'http://localhost:5000/users/register',
		user
	);
	return data;
}

export async function getAllConfrences() {
	const { data } = await axios.get('http://localhost:5000/summits');
	return data;
}

export async function getConfrenceById(id: string | undefined) {
	const { data } = await axios.get(
		`http://localhost:5000/summits/getConfrenceById/${id}`
	);
	return data;
}

export async function registerToConfrence(
	confrenceId: string,
	attendeeId: any
) {
	const { data } = await axios.post(
		`http://localhost:5000/summits/${confrenceId}`,
		{ id: attendeeId }
	);
	return data;
}

export async function deleteRegistration(confrenceId: any, userId: any) {
  const { data } = await axios.post(
		`http://localhost:5000/summits/deleteRegistration/${confrenceId}`,
    {id: userId}
  );
  return data;
}

export async function getUserById(userId: any) {
  const { data } = await axios.get(
		`http://localhost:5000/users/${userId}`
  );
  return data;
}
