import React from 'react';
import HamburgerButton from "./HamburgerButton";
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';


const MobileNav = ({ isOpen, setOpen, onToggle, handleOnClose }) => {

	// Checking the browser to set a different background color to the mobile menu (because the backdrop-filter property doesn't work on mozilla)
	const navigateur = navigator.userAgent;

	// console.log(navigateur)

	return (
		<nav role="navigation" aria-label="Mobile navigation menu" className="mobileNav">
			<div className="mobileNav__button" aria-controls="toggleNavbar" aria-expanded={isOpen ? "true" : "false"} aria-label="Toggle navigation">
				<HamburgerButton toggled={isOpen} toggle={setOpen} onToggle={onToggle} />
			</div>

			<Menu right
				className={`mobileNav__menu ${!navigateur.includes("Chrome") ? "mozilla" : "others"}`}
				pageWrapId={"page-wrap"}
				width={'250px'}
				isOpen={isOpen}
				overlayClassName={"mobileNav__menu-overlay"}
				onClose={handleOnClose}
				id="toggleNavbar"
			>

				<h2
				// style={!navigateur.includes("Chrome") ? { color: "black" } : { color: "white" }} 
				>Naviguer vers</h2>

				<Link className="mobileNav__menu-link"
					to="/"
					onClick={(e) => { setOpen(); }}> Accueil</Link>

				<Link className="mobileNav__menu-link"
					to={`/creations`}
					onClick={(e) => { setOpen(); }}>Créations</Link>

				<Link className="mobileNav__menu-link"
					to="/contact"
					onClick={(e) => { setOpen(); }}>Contact</Link>
				</Menu>
		</nav>
	)
}

export default MobileNav;