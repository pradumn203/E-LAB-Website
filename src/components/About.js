import React, { useEffect } from "react"
import GroupPic1 from "../assets/DSC_0278.JPG"
// import GroupPic2 from "../assets/39021205_1044416065723551_9160990231040622592_n.jpg"
// import GroupPic3 from "../assets/DSC_0283.NEF.jpg"
import "./about.css"

function About() {
	return (
		<div class='section' id='aboutsection'>
			<div class='one'>
				<div class='home-team'>
					<img class='home-team-img' src={GroupPic1} />
				</div>
			</div>
			<div class='two'>
				<div class='contents c0'>Who are we?</div>
				<div class='contents c1'>
					E-Labs is a student-run peer-to-peer technical engagement platform. We
					offer a multitude of courses and projects beyond the present syllabus
					to help you grow and cope up with the ever so dynamic world. So let's
					come together here at E Labs to excel by learning from peers while
					bridging the immense gap between academics and industry.
				</div>
				<div class='button-container'>
					<a href='/team'>
						<div class='button'>Know the team</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default About
