import React from 'react';
import SpeakerCard from '../../components/speaker-card/SpeakerCard.component';
import './Speakers.styles.scss';

import abdurahman from '../../assets/abdurahman_ashraf.jpeg';
import senousy from '../../assets/ahmed-senousy.jpg';
import mostafa from '../../assets/mostafa-ezz.jpeg';
import ammar from '../../assets/ahmed-ammar.jpeg';
import hasan from '../../assets/hasan-ragab.jpg';

const speakers = [
	{
		name: 'Abdurahman Ashraf',
		jobTitle: 'Cyber Security',
		id: 2021170915,
		photo: abdurahman,
	},
	{
		name: 'Ahmed Senousy',
		jobTitle: 'Cyber Security',
		id: 2021170904,
		photo: senousy,
	},
	{
		name: 'Mostafa Ezz',
		jobTitle: 'Cyber Security',
		id: 2021170923,
		photo: mostafa,
	},
	{
		name: 'Ahmed Ammar',
		jobTitle: 'Cyber Security',
		id: 2021170905,
		photo: ammar,
	},
	{
		name: 'Hasan Ragab',
		jobTitle: 'Cyber Security',
		id: 20201701808,
		photo: hasan,
	},
];

const Speakers = () => {
	return (
		<section id="speakers" className="vh-100">
			<div className="section-image">
				<div className="dark-layer h-100 w-100 d-flex justify-content-center align-items-center">
					<h1 className="text-light-grey p-5 bg-dark bg-opacity-25 rounded-5">
						Our Speakers
					</h1>
				</div>
			</div>
			<div className="container mt-5">
				<div className="row justify-content-center gy-4">
					{speakers.map((speaker) => (
						<div className="col-md-4">
              <SpeakerCard speaker={speaker} />
            </div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Speakers;
