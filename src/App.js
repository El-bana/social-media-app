import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import { Route, Switch } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Profile from "./Profile";

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/login' component={SignInForm} />
				<Route exact path='/register' component={SignUpForm} />
				<Route exact path='/:username' component={Profile} />
				<Route exact path='/' component={Homepage} />
			</Switch>
		</div>
	);
}

export default App;
