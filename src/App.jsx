import React, { useState } from 'react';
import './App.css';
import Header from "./Components/Header";
import Home from "./Pages/Home";
import useWindowSize from './Hooks/useWindowSize';
import MobileNav from "./Components/MobileNav";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, NavLink } from "react-router-dom";
import Contact from './Pages/Contact';
import Creations from './Pages/Creations';
import DesktopNav from './Components/DesktopNav';


function App() {

	const dimensions = useWindowSize();

	// State and functions for the mobile device menu
	const [isOpen, setIsOpen] = useState(false);
	const setOpen = () => {
		setIsOpen(!isOpen)
	}
	const onToggle = (toggled) => {
		toggled ? setIsOpen(true) : setIsOpen(false)
	}
	const handleOnClose = () => {
		setIsOpen(false)
	}


	return (
		<div className="App">

			<div className="background">
				<img src={process.env.PUBLIC_URL + "/assets/cups4.jpg"} alt="" />
			</div>

			{dimensions.width < 768 ? 
				<MobileNav
					isOpen={isOpen}
					setOpen={setOpen}
					onToggle={onToggle}
					handleOnClose={handleOnClose} />
				:
				<DesktopNav/>

			}
			<Header />
			{/* <Router> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/creations" element={<Creations />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			{/* </Router> */}
		</div>
	);
}

export default App;