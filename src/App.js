import React, { useContext, useEffect } from "react";
import "./App.css";
import Homepage from "./Homepage";
import { Route, Switch } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Settings from "./Settings";
import Profile from "./Profile";
import Navbar from "./Navbar";
import { LoggedInContext } from "./Contexts/LoggedIn.context";
import axios from "axios";

function App() {
	const { name, logIn, changeName, changeImage } = useContext(LoggedInContext);
	useEffect(() => {
		if (localStorage.hasOwnProperty("token")) {
			const fetchUser = async () => {
				const res = await axios("https://conduit.productionready.io/api/user", {
					headers: { Authorization: `Token ${localStorage.getItem("token")}` },
				});
				logIn();
				changeName(res.data.user.username);
				changeImage(res.data.user.image);
				console.log(res);
			};
			fetchUser();
		}
	}, []);

	return (
		<div className='App'>
			<Navbar />
			<Switch>
				<Route exact path='/login' component={SignInForm} />
				<Route exact path='/register' component={SignUpForm} />
				<Route exact path='/settings' component={Settings} />
				<Route exact path='/:username' component={Profile} />
				<Route exact path='/' component={Homepage} />
			</Switch>
		</div>
	);
}

export default App;
