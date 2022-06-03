import React from "react"
import "../components/card.css"
function Card({ data }) {
	const githubHandler = () => {
		window.open(`${data.github}`)
	}
	const linkedinHandler = () => {
		window.open(`${data.linkedin}`)
	}
	const mailHalndler = () => {
		window.open(`mailto:${data.email}`)
	}
	return (
		<div className='card-container'>
			<div className='left'>
				<img src={data.photo} className='photo'></img>
			</div>
			<div className='right'>
				<div className='name'>{data.name}</div>
				<div className='domain'>{data.domain}</div>
				<div className='socials'>
					<div className='eachSocial mail' onClick={mailHalndler}>
						<i class='far fa-envelope'></i>
					</div>
					{data.github !== undefined && (
						<div className='eachSocial github' onClick={githubHandler}>
							<i class='fab fa-github'></i>
						</div>
					)}
					{data.linkedin !== undefined && (
						<div className='eachSocial linkedin' onClick={linkedinHandler}>
							<i class='fab fa-linkedin-in'></i>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Card
