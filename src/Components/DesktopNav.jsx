import React from 'react'
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

const DesktopNav = () => {

	const articles = useSelector(state => state.articles);

	return (

		<nav className="desktopNav" >
			<NavLink
				to="/"
				className={({ isActive }) => `desktopNav__link ${isActive ? "active" : "inactive" }`}> Accueil</NavLink>

			<NavLink
				to="/creations"
				className={({ isActive }) => `desktopNav__link ${isActive ? "active" : "inactive" }`}>Créations</NavLink>

			<NavLink
				to="/contact"
				className={({ isActive }) => `desktopNav__link ${isActive ? "active" : "inactive" }`}>Contact</NavLink>

			<div className="desktopNav__basket">
				<div className="desktopNav__basket-number">{articles.articles.length > 0 && articles.articles.length}</div>
				<ShoppingCart className="nav" />
			</div>
		</nav>
	)
}

export default DesktopNav