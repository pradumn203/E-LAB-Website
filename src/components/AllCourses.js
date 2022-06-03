import React from "react"
import "../components/allcourses.css"
//pdf imports
import network from "../documents/networking.pdf"
import java from "../documents/java.pdf"
import iot from "../documents/iot.pdf"
import android from "../documents/android.pdf"
import embedded from "../documents/embedded.pdf"
import ar from "../documents/ar.pdf"
import ml from "../documents/ml.pdf"
import web from "../documents/web.pdf"
//image imports
import networkIMG from "../images/networking.png"
import javaIMG from "../images/java.png"
import iotIMG from "../images/internet.png"
import androidIMG from "../images/android.png"
import embeddedIMG from "../images/es.png"
import arIMG from "../images/ar.png"
import mlIMG from "../images/ml.png"
import webIMG from "../images/web.png"
//component imports
import Course from "../components/Course"
const allCourses = [
	{
		title: "Android",
		desc: "",
		document: android,
		background: androidIMG,
	},
	{
		title: "Web",
		desc: "",
		document: web,
		background: webIMG,
	},
	{
		title: "Java",
		desc: "",
		document: java,
		background: javaIMG,
	},
	{
		title: "Networking",
		desc: "",
		document: network,
		background: networkIMG,
	},
	{
		title: "Machine Learning",
		desc: "",
		document: ml,
		background: mlIMG,
	},
	{
		title: "Embedded System",
		desc: "",
		document: embedded,
		background: embeddedIMG,
	},
	{
		title: "IoT",
		desc: "",
		document: iot,
		background: iotIMG,
	},
	{
		title: "AR/VR",
		desc: "",
		document: ar,
		background: arIMG,
	},
]

function AllCourses() {
	return (
		<>
			<div className='allCourse-title'>Courses we offer</div>
			<div className='courses-container'>
				{allCourses.map((eachCourse) => {
					return <Course data={eachCourse} />
				})}
			</div>
		</>
	)
}

export default AllCourses
