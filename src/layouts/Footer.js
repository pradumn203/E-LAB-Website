import React from "react"
import Logo from "../assets/Elabs logo black.png"
import Footer_img from "../assets/footer-background-png-6.png"

const Footer = () => {
	return (
		<div style={{ backgroundImage: `url(${Footer_img})` }}>
			{/* Footer */}
			<footer className='page-footer font-small mdb-color pt-4 bg-dark sticky-bottom'>
				{/* Footer Links */}
				<div className='container text-center text-md-left'>
					{/* Footer links */}
					<div className='row text-center text-md-left mt-3 pb-3'>
						{/* Grid column */}
						<div className='text-center col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
							<h3 className='text-uppercase text-white mx-auto mb-4 font-weight-bold '>
								E-Labs
							</h3>
							<img src={Logo} height='150' />
						</div>
						{/* Grid column */}
						<hr className='w-100 clearfix d-md-none' />

						<hr className='w-100 clearfix d-md-none' />

						<hr className='w-100 clearfix d-md-none' />
						{/* Grid column */}
						<div className='text-center col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
							<h6 className='text-uppercase mb-4 text-white font-weight-bold'>
								Contact
							</h6>
							<p class='text-white'>
								<i className='fa fa-home mr-3 text-white' /> School Of
								Electronics Engineering, KIIT University Bhubaneswar, India
							</p>
							<p class='text-white'>
								<i className='fa fa-envelope mr-3 text-white' />{" "}
								elabs.electronics@kiit.ac.in
							</p>
							<p class='text-white'>
								<i className='fa fa-phone mr-3 text-white' /> +91 99382 82421
							</p>
							{/* <p class="text-white">
                <i className="fa fa-print mr-3 text-white" /> + 01 234 567 89</p> */}
						</div>
						{/* Grid column */}
					</div>
					{/* Footer links */}
					<hr />
					{/* Grid row */}
					<div className='row d-flex align-items-center'>
						{/* Grid column */}
						<div className='col-md-7 col-lg-8'>
							{/*Copyright*/}
							<p class='text-white' style={{ display: "inline" }}>
								Copyright &#169; 'E-Labs'
							</p>

							{/* <p className="text-center text-white text-md-left">© 2020 Copyright:
                  <strong> E-Labs</strong>
              </p> */}
						</div>
						{/* Grid column */}
						{/* Grid column */}
						<div className='col-md-5 col-lg-4 ml-lg-0'>
							{/* Social buttons */}
							<br />
							<div className='text-center text-md-right'>
								<ul className='list-unstyled list-inline'>
									<li className='list-inline-item'>
										<a
											href='https://www.facebook.com/kiitelabs/'
											className='btn-floating btn-sm rgba-white-slight mx-1'
										>
											<i class='fa fa-facebook-f text-white'></i>
										</a>
									</li>

									<li className='list-inline-item'>
										<a
											href='https://www.instagram.com/kiitelabs/?hl=en'
											className='btn-floating btn-sm rgba-white-slight mx-1'
										>
											<i class='fa fa-instagram text-white'></i>
										</a>
									</li>
									<li className='list-inline-item'>
										<a
											href='https://www.linkedin.com/company/kiit-elabs'
											className='btn-floating btn-sm rgba-white-slight mx-1'
										>
											<i className='fa fa-linkedin-in text-white' />
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/* Grid column */}
					</div>
					{/* Grid row */}
				</div>
				{/* Footer Links */}
			</footer>
			{/* Footer */}
		</div>
	)
}

export default Footer
