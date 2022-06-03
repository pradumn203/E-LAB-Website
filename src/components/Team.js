import React, { useEffect, useState } from "react"
import Card from "../components/Card"
import axios from "axios"
import "./team.css"

function Team() {
	const apiURL = `https://api.elabskiit.me/team`
	const [member, setMember] = useState([])

	useEffect(() => {
		axios
			.get(apiURL, {
				headers: {
					"Access-Control-Allow-Origin": "*",
				},
			})
			.then((response) => {
				setMember(response.data.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [apiURL])

	return (
		<div>
			<div class='teamQuote'>
				<h2 id='quote'>
					<span id='quoteMark'>"</span>The strength of the team is each
					individual member. The strength of each member is the team
					<span id='quoteMark'>"</span>
				</h2>
				<h4 id='quoteBy'>-Phil Jackson</h4>
			</div>
			<div className='team-title'>Meet the Team</div>
			<div class='team-wrapper'>
				<div className='team-container'>
					{member.map((eachMember) => {
						return <Card data={eachMember} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Team
