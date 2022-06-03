import React, { Component } from "react"
import axios from "axios"
import "./register.css"
import {
	FaRegUser,
	FaMercury,
	FaAt,
	FaWhatsapp,
	FaCodeBranch,
} from "react-icons/fa"
import { TiSortNumerically } from "react-icons/ti"
import { ImBooks } from "react-icons/im"

export default class JoinUs extends Component {
	constructor(props) {
		super(props)

		this.onChangeName = this.onChangeName.bind(this)
		this.onChangeRoll = this.onChangeRoll.bind(this)
		this.onChangeEmail = this.onChangeEmail.bind(this)
		this.onChangeBranch = this.onChangeBranch.bind(this)
		//  this.onChangeYear = this.onChangeYear.bind(this);
		this.onChangeCourse = this.onChangeCourse.bind(this)
		this.onChangeContact = this.onChangeContact.bind(this)
		this.onChangeSem = this.onChangeSem.bind(this)
		this.onChangeGender = this.onChangeGender.bind(this)
		this.focusMe = this.focusMe.bind(this)
		this.defocusMe = this.defocusMe.bind(this)
		this.inpRef = React.createRef()

		this.onSubmit = this.onSubmit.bind(this)

		this.state = {
			name: "",
			roll: "",
			email: "",
			branch: "",
			year: "",
			course: "",
			contact: "",
			courses: [],
			gender: "",
			sem: "",
			remseats: "",
		}
	}

	componentDidMount() {
		this.getCounts()
	}

	async getCounts() {
		try {
			// return await axios.get('https://api-elabskiit.herokuapp.com/course')
			const response = await axios.get("https://api.elabskiit.me/course")
			const res = response.data.courses

			var newStateArray = this.state.courses.slice()
			res.forEach((item) => {
				console.log(item)
				newStateArray.push(item)
			})

			this.setState({ courses: newStateArray })
			console.log(this.state.courses)
			this.state.courses.map((item) => console.log(item.name))
		} catch (error) {
			console.error(error)
		}
	}

	async getCountofSeats() {}

	onChangeCourse(e) {
		this.setState({
			course: e.target.value,
		})
		const newArray = this.state.courses.filter((course) => {
			return course.name === e.target.value
		})

		this.setState({
			remseats: newArray[0]?.presentSeats,
		})
	}

	onChangeName(e) {
		this.setState({
			name: e.target.value,
		})
	}
	onChangeRoll(e) {
		this.setState({
			roll: e.target.value,
		})
	}
	onChangeEmail(e) {
		this.setState({
			email: e.target.value,
		})
	}
	onChangeBranch(e) {
		this.setState({
			branch: e.target.value,
		})
	}

	onChangeSem(e) {
		this.setState({
			sem: e.target.value,
		})
	}

	onChangeContact(e) {
		this.setState({
			contact: e.target.value,
		})
	}
	onChangeGender(e) {
		this.setState({
			gender: e.target.value,
		})
	}

	onFinish(e) {
		for (var i = 0; i < this.state.courses.length; i++) {
			if (this.state.courses[i].course_name === e) {
				return this.state.courses[i].course_name > 0 ? true : false
			}
		}
	}
	focusMe(cont) {
		document.querySelector(`.${cont}`).style.borderColor = "#0787e8"
	}
	defocusMe(obj) {
		document.querySelector(`.${obj}`).style.borderColor = "#535353"
	}
	onSubmit(e) {
		e.preventDefault()

		const Params = {
			name: this.state.name,
			roll: this.state.roll,
			email: this.state.email,
			contact: this.state.contact,
			branch: this.state.branch,
			year: this.state.year,
			course: this.state.course,
			gender: this.state.gender,
		}

		axios({
			method: "POST",
			url: "https://api.elabskiit.me/register",
			data: Params,
		}).then((response) => {
			if (response.data.success) {
				alert("Your Form Has Been Successfully Submitted")
				//    this.props.onSubmit(response.data.success);
				this.setState({
					name: "",
					roll: "",
					email: "",
					branch: "",
					//  year: '',
					course: "",
					contact: "",
					semester: "",
					gender: "",
				})
			} else {
				alert(response.data.message)
				//    this.props.onSubmit(response.data.message);
			}
		})
	}

	render() {
		return (
			<div className='register-container'>
				<center>
					<div className='col-md-4'>
						<div style={{ marginTop: 50 }}>
							<h2>Registration Form</h2>
							<br />
							<form onSubmit={this.onSubmit} className='form'>
								<div className='input-field name'>
									<span>
										<FaRegUser />
									</span>
									<input
										type='text'
										className='input'
										placeholder='Enter Your Name'
										value={this.state.name}
										onChange={this.onChangeName}
										onClick={() => {
											this.focusMe("name")
										}}
										onBlur={() => {
											this.defocusMe("name")
										}}
										required
									/>
								</div>
								<div className='input-field gender'>
									<span>
										<FaMercury />
									</span>
									<select
										required
										className='input'
										value={this.state.gender}
										onChange={this.onChangeGender}
										onClick={() => {
											this.focusMe("gender")
										}}
										onBlur={() => {
											this.defocusMe("gender")
										}}
									>
										<option disabled={this.state.gender !== ""} selected=''>
											Gender
										</option>
										<option value='Male'>Male</option>
										<option value='Female'>Female</option>
									</select>
								</div>
								<div className='input-field roll'>
									<span>
										<TiSortNumerically />
									</span>
									<input
										type='text'
										maxLength='8'
										pattern='[0-9]{8}'
										title='Enter the KIIT roll number'
										placeholder='College Roll Number'
										className='input'
										value={this.state.roll}
										onChange={this.onChangeRoll}
										onClick={() => {
											this.focusMe("roll")
										}}
										onBlur={() => {
											this.defocusMe("roll")
										}}
										required
									/>
								</div>
								<div className='input-field email'>
									<span>
										<FaAt />
									</span>
									<input
										type='email'
										placeholder='E-Mail Address (Use KIIT Mail)'
										maxLength='19'
										pattern='[0-9]{8}@kiit.ac.in'
										title='Enter the KIIT email'
										className='input'
										value={this.state.email}
										onChange={this.onChangeEmail}
										onClick={() => {
											this.focusMe("email")
										}}
										onBlur={() => {
											this.defocusMe("email")
										}}
										required
									/>
								</div>
								<div className='input-field wapp'>
									<span>
										<FaWhatsapp />
									</span>
									<input
										type='text'
										maxLength='10'
										pattern='[0-9]{10}'
										className='input'
										placeholder='Whatsapp No.'
										value={this.state.contact}
										onChange={this.onChangeContact}
										onClick={() => {
											this.focusMe("wapp")
										}}
										onBlur={() => {
											this.defocusMe("wapp")
										}}
										required
									/>
								</div>
								<div className='input-field sem'>
									<span>
										<FaCodeBranch />
									</span>
									<select
										required
										className='input'
										value={this.state.sem}
										onChange={this.onChangeSem}
										onClick={() => {
											this.focusMe("sem")
										}}
										onBlur={() => {
											this.defocusMe("sem")
										}}
									>
										<option disabled={this.state.sem !== ""} selected=''>
											Semester
										</option>
										<option value='1st'>1st</option>
										<option value='2nd'>2nd</option>
										<option value='3rd'>3rd</option>
										<option value='4th'>4th</option>
										<option value='5th'>5th</option>
										<option value='6th'>6th</option>
										<option value='7th'>7th</option>
										<option value='8th'>8th</option>
									</select>
								</div>

								<div className='input-field branch'>
									<span>
										<FaCodeBranch />
									</span>
									<select
										required
										className='input'
										value={this.state.branch}
										onChange={this.onChangeBranch}
										onClick={() => {
											this.focusMe("branch")
										}}
										onBlur={() => {
											this.defocusMe("branch")
										}}
									>
										<option disabled={this.state.branch !== ""} selected=''>
											Branch
										</option>
										<option value='ETC'>ETC</option>
										<option value='EEE'>EEE</option>
										<option value='EE'>EE</option>
										<option value='ECS'>ECS</option>
										<option value='EI'>EI</option>
										<option value='MECHANICAL'>MECHANICAL </option>
										<option value='CS'>CS </option>
										<option value='IT'>IT </option>
										<option value='CSSE'>CSSE </option>
										<option value='CSCE'>CSCE </option>
									</select>
								</div>

								<div className='input-field course'>
									<span>
										<ImBooks />
									</span>
									<select
										required
										className='input selectpicker'
										//  value={this.state.course}
										onChange={this.onChangeCourse}
										placeholder='The Course You Are Interested'
										onClick={() => {
											this.focusMe("course")
										}}
										onBlur={() => {
											this.defocusMe("course")
										}}
									>
										<option>The Course You Are Interested</option>
										{this.state.courses.map((item) => (
											<option value={item.name}>{item.name}</option>
										))}
									</select>
								</div>

								<label style={{ fontFamily: "acme" }}>
									<strong>Seats Left:{this.state.remseats}</strong>
								</label>

								<br />
								<div class='form-group'>
									<button
										class='btn btn-default text-white btn-lg'
										style={{ fontFamily: "Acme" }}
									>
										Send <i class='fa fa-paper-plane-o ml-1'></i>
									</button>
								</div>
							</form>
						</div>
					</div>
				</center>
			</div>
		)
	}
}
