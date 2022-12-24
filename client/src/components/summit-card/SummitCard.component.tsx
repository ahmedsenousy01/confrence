import React from 'react'
import { Link } from 'react-router-dom';
import './SummitCard.styles.scss'

const SummitCard = ({ summit }: any) => {
  return (
		<div className="col-md-4 mb-0 mb-sm-3">
			<Link to={`/summits/${summit._id}`} className="inner">
				<div className="img">
					<img
						src={summit.cardImageUrl}
						className="w-100 rounded-3"
						alt=""
					/>
				</div>
				<p className="fw-bolder inperson-or-not mt-3 mb-0">
					IN-PERSON SUMMIT
				</p>
				<h4 className="city mb-0">{summit.city}</h4>
				<p className="mb-0 fw-bold date text-dark-grey">
					{summit.date
						? summit.date.toString().substring(0, 10)
						: 'Date To Be Announced'}
				</p>
				<p className="venue">
					{summit.venue ? summit.venue : 'Venue To Be Announced'}
				</p>
			</Link>
		</div>
  );
}

export default SummitCard