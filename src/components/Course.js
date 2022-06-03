import React from "react"
import "../components/course.css"
function Course({ data }) {
	const documentHandler = () => {
		window.open(`${data.document}`)
	}
	return (
		<div className='course-container' onClick={documentHandler}>
			<div className='logo-container'>
				<div className='course-logo'>
					<img src={data.background} className='logo-img' />
				</div>
			</div>
			<div className='course-title'>{data.title}</div>
		</div>
	)
}

export default Course
