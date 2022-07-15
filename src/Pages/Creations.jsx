import React from 'react'
import Article from './../Components/Article';
import Article2 from './../Components/Article2';

const Creations = () => {
	return (
		<div className="creations" >
			<h1>Mes créations</h1>
			<p>Voici un échantillon de mes réalisations.Pour une demande de devis, ajoutez au panier le ou les produits désirés, et rendez-vous sur la page contact pour m'envoyer une demande de devis 🧁</p>
			<div className="creations__container">
				<Article image={process.env.PUBLIC_URL + "./assets/fraises.jpeg"} title="Fraisier" />
				<Article image={process.env.PUBLIC_URL + "./assets/iceQueen.jpeg"} title="Création Reine des neiges" />
				<Article image={process.env.PUBLIC_URL + "./assets/choco.jpeg"} title="Cupcakes choco" />
				<Article image={process.env.PUBLIC_URL + "./assets/macarons.jpeg"} title="Macarons" />
			</div>
		</div>
	)
}

export default Creations