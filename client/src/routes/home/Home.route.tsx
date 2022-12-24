import React, { useEffect, useState } from 'react';
import SummitCard from '../../components/summit-card/SummitCard.component';
import './Home.styles.scss';
import { getAllConfrences } from '../../api/requests';

const Home = () => {
	const [summits, setSummits] = useState([]);

	useEffect(() => {
		(async () => {
			const apiSummits = await getAllConfrences();
			setSummits(apiSummits.summits);
		})()
	}, []);

	return (
		<section id="hero">
			<div className="vh-100 hero">
				<div className="dark-layer w-100 h-100 d-flex justify-content-center align-items-center">
					<div className="content text-center">
						<h1 className="text-light-grey p-5 rounded-5 bg-dark bg-opacity-25 text-center mb-3">
							Keep up with all the new technologies
							<br />
							in the cyber world
						</h1>
					</div>
				</div>
			</div>

			<section id="home" className="container">
				<section
					id="upcoming-summits"
					className="row pt-5 mt-5 px-4 bg-light rounded-2"
				>
					<h2 className="text-center mb-3 fw-bolder">
						Upcoming Events
					</h2>
					{summits.map((summit, index) => {
						return (
							<SummitCard
								summit={summit}
								key={`summit-card-${index}`}
							/>
						);
					})}
				</section>
			</section>
		</section>
	);
};

export default Home;
