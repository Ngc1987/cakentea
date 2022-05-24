import React from 'react';
import Article from "../Components/Article";

const Home = () => {
	return (
		<section className="home" >
			<h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa rerum, perferendis facilis similique soluta sed voluptatibus aperiam. Cum nemo minima laboriosam soluta cumque, ipsum dolore ipsam nam, quaerat eveniet quas?</h2>
			<div className="home__articles">
				<Article image={process.env.PUBLIC_URL + "./assets/fraises.jpeg"} title="Fraisier" />
				<Article image={process.env.PUBLIC_URL + "./assets/iceQueen.jpeg"} title="Création Reine des neiges" />
				<Article image={process.env.PUBLIC_URL + "./assets/choco.jpeg"} title="Cupcakes choco" />
				<Article image={process.env.PUBLIC_URL + "./assets/macarons.jpeg"} title="Macarons" />
			</div>
		</section>
	)
}

export default Home;