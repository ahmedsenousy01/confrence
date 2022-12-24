import React from 'react';
import './SpeakerCard.styles.scss';

const SpeakerCard = ({ speaker }: any) => {
	return (
		<div className="speaker d-flex justify-content-start align-items-center bg-light rounded-5">
			<img src={speaker.photo} alt="" className="img w-25 me-3" />
			<div className="text">
				{speaker.name} <br />
				{speaker.jobTitle} <br />
				{speaker.id}
			</div>
		</div>
	);
};

export default SpeakerCard;
