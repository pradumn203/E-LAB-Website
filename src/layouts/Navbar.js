import React from "react"
import { Link } from "react-router-dom"

import Logo from "../assets/Elabs logo black.png"
import "../components/home.css"

const Navbar = () => {
	return (
		<nav class='navbar navbar-expand-lg navbar-light py-3'>
			<div class='container'>
				<img src={Logo} height='42' />

				<strong>
					<div
						style={{
							marginLeft: "20px",
							fontWeight: "bold",
							fontFamily: "Ubuntu",
						}}
					>
						<Link to='/' className='navbar-brand d-flex align-items-center'>
							E LABS
						</Link>
					</div>
				</strong>
				<button
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
					class='navbar-toggler'
				>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div id='navbarSupportedContent' class='collapse navbar-collapse'>
					<ul class='navbar-nav ml-auto'>
						<li class='nav-item '>
							<span className='nav-link'>
								<Link
									to='/'
									className='nav-option'
									style={{ fontFamily: "Ubuntu", textDecoration: "none" }}
								>
									Home
								</Link>
							</span>
						</li>
						<li class='nav-item '>
							<span className='nav-link'>
								<Link
									to='/register'
									className='nav-option'
									style={{ fontFamily: "Ubuntu", textDecoration: "none" }}
								>
									Register
								</Link>
							</span>
						</li>
						<li class='nav-item'>
							<span className='nav-link'>
								<Link
									to='./team'
									className='nav-option'
									style={{ fontFamily: "Ubuntu", textDecoration: "none" }}
								>
									Team
								</Link>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
