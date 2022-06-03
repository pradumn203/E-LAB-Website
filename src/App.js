import React, { Component } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import "./App.css"
import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"
import Register from "./components/Register"
import Team from "./components/Team"
import Home from "./components/Home"
import About from "./components/About"
import AllCourses from "./components/AllCourses"
import Alert_Success from "./components/Alert_Success"
import Alert_Fail from "./components/Alert_Fail"
import NewFooter from "./layouts/NewFooter"

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			success: "Registration will start soon",
		}

		this.onSubmit = (fields) => {
			this.setState({
				success: fields,
			})
		}
	}

	render() {
		var showAlert
		const message = this.state.success
		if (this.state.success === true) {
			showAlert = <Alert_Success />
		} else {
			showAlert = <Alert_Fail message={message} />
		}

		return (
			<BrowserRouter>
				<div className='App'>
					<Navbar></Navbar>
					<div className='content-container'>
						<Switch>
							<Route exact path='/'>
								<Home />
								<About />
								<AllCourses />
							</Route>
							<Route exact path='/register'>
								<br />
								{showAlert}
								<Register onSubmit={(fields) => this.onSubmit(fields)} />
							</Route>
							<Route exact path='/team'>
								<br />
								{showAlert}
								<Team onSubmit={(fields) => this.onSubmit(fields)} />
							</Route>
							<Route
								path='/url-shortner'
								render={() => {
									return window.location.assign(
										"https://short.elabskiit.workers.dev/"
									)
								}}
							/>
							<Route
								exact
								path='/@:alias'
								render={(props) => {
									return window.location.assign(
										`https://short.elabskiit.workers.dev/${props.match.params.alias}`
									)
								}}
							/>
						</Switch>
					</div>
					<NewFooter />
				</div>
			</BrowserRouter>
		)
	}
}

export default App
