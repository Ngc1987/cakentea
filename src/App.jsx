import React, { useState } from 'react'; 
import './App.css';
import Header from "./Components/Header";
import Home from "./Pages/Home";
import useWindowSize from './Hooks/useWindowSize';
import MobileNav from "./Components/MobileNav";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";


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

			{dimensions.width < 768 && <MobileNav
				isOpen={isOpen}
				setOpen={setOpen}
				onToggle={onToggle}
				handleOnClose={handleOnClose} />

			}
			<Header/>
			{/* <Router> */}
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			{/* </Router> */}
		</div>
	);
}

export default App;