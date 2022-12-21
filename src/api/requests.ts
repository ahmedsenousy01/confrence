import axios from "axios";

export async function getAllConfrences() {
  const { data } = await axios.get('https://localhost:5000/conferences');
  return data;
}

export async function getAllSpeakers() {
  const { data } = await axios.get('https://localhost:5000/speakers');
  return data;
}

export async function getAllVenues() {
  const { data } = await axios.get('https://localhost:5000/venues');
  return data;
}

export async function registerToConfrence(confrenceId: string, student: object) {
  const { data } = await axios.post(`https://localhost:5000/confrences?id=${confrenceId}`, student);
  return data;
}