import React, { useEffect } from "react"
import "./home.css"
import { gsap } from "gsap"
import Logo from "../assets/Elabs logo black.png"
import { Link } from "react-scroll"
function Home() {
	// useEffect(() => {
	// 	if (window.innerWidth >= 768) {
	// 		gsap.from(".one", { attr: { flex: 0 }, x: -1000, duration: 1.2 })
	// 		gsap.from(".two", { attr: { flex: 5 }, duration: 1.2, delay: 1.6 })
	// 		gsap.from(".overflow", { y: -1000, duration: 1.2, delay: 1.2 })
	// 		gsap.from(".h6", { y: -100, duration: 1.2, delay: 0, opacity: 0 })
	// 		gsap.from(".h1", { y: -100, duration: 1.2, delay: 2.0, opacity: 0 })
	// 		gsap.from("button", { x: -400, duration: 1.6, delay: 2, opacity: 0 })
	// 	}
	// })

	return (
		<div>
			<div className='wrapper'>
				<div className='one'>
					<div className='heading'>
						<h6 className='h6'>Grow together with</h6>
						<h1 className='h1'>E LABS</h1>
						<Link
							to='aboutsection'
							smooth={true}
							spy={true}
							offset={-90}
							duration={2000}
						>
							<button>Know More</button>
						</Link>
					</div>
				</div>
				<div className='two'>
					<div className='overflow'>
						<img src={Logo} alt='logo'></img>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
