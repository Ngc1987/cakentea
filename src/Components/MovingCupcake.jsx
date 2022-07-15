import React, { useEffect, useRef } from 'react';

const MovingCupcake = () => {

	const particles = useRef();

	let border = ["50%", "20%"];
	let colors = ["#00b1b7", "#ff2c7c", "#00df4a"];


	useEffect(() => {
		// particles.current.innerHTML = "";
		console.log(particles)
		window.addEventListener("resize", main)
		window.addEventListener("load", main)
		return () => { window.removeEventListener("resize", main); window.removeEventListener("load", main) };
	})

	function getParticles() {
		var np = window.innerWidth / 30;
		// console.log(np)
		particles.current.innerHTML = "";
		for (var i = 0; i < np; i++) {
			var w = document.documentElement.clientWidth;
			var h = document.documentElement.clientHeight;
			var rndw = Math.floor(Math.random() * w) + 1;
			var rndh = Math.floor(Math.random() * h) + 1;
			var anima = (Math.floor(Math.random() * 20) + 8) / 2;
			var bdr = Math.floor(Math.random() * 2);
			var color = Math.floor(Math.random() * 3);

			var div = document.createElement("div");
			div.style.position = "absolute";
			div.style.marginLeft = rndw + "px";
			// div.style.marginTop = rndh + "px";
			div.style.width = "10px";
			div.style.height = "10px";
			div.style.backgroundColor = colors[color];
			div.style.borderRadius = border[bdr];
			div.style.animation = "move " + anima + "s ease-in infinite";
			particles.current.appendChild(div);
			console.log(div)
		}
	}

	function main(event) {
		getParticles();
	}



	return (
		<div className="movingCupcake" >

			{/* <div class="particles" id="particles" ref={particles}></div> */}
			<div class="main" >
				<div class="base"></div>
				<div class="sdw"></div>

				<div class="eye eye-l"></div>
				<div class="eye eye-r"></div>
				<div class="shadow shadow-l"></div>
				<div class="shadow shadow-r"></div>
				<div class="mouth"></div>

				<div class="top">
					<div class="top__item"></div>
					<div class="top__item"></div>
					<div class="top__item"></div>
				</div>

				<div class="colors">
					<div class="chips chips--blue"></div>
					<div class="chips chips--pink chips--rotate"></div>
					<div class="chips chips--green"></div>
					<div class="chips chips--blue chips--rotate"></div>
					<div class="chips chips--pink"></div>
					<div class="chips chips--green chips--rotate"></div>
					<div class="chips chips--blue"></div>
				</div>
			</div>
		</div>
	)
}

export default MovingCupcake