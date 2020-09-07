import React, { useContext, useEffect } from "react";
import "./App.css";
import Homepage from "./Homepage";
import { Route, Switch } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Settings from "./Settings";
import Profile from "./Profile";
import Editor from "./Editor";
import Navbar from "./Navbar";
import Article from "./Article";
import { LoggedInContext } from "./Contexts/LoggedIn.context";
import axios from "axios";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "rgba(135, 220, 135, 1)",
			main: "rgba(92, 184, 92, 1)",
			dark: "rgba(64, 128, 64, 1)",
			contrastText: "#fff",
		},
	},
});

function App() {
	const { setUser } = useContext(LoggedInContext);
	useEffect(() => {
		const fetchUser = async () => {
			if (localStorage.hasOwnProperty("token")) {
				const res = await axios("https://conduit.productionready.io/api/user", {
					headers: { Authorization: `Token ${localStorage.getItem("token")}` },
				});
				setUser(res.data.user);
			}
		};
		fetchUser();
	}, []);

	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<Navbar />
				<Switch>
					<Route exact path='/login' component={SignInForm} />
					<Route exact path='/register' component={SignUpForm} />
					<Route exact path='/settings' component={Settings} />
					<Route exact path='/editor' component={Editor} />
					<Route exact path='/:username' component={Profile} />
					<Route exact path='/article/:slug' component={Article} />
					<Route exact path='/' component={Homepage} />
				</Switch>
			</ThemeProvider>
		</div>
	);
}

export default App;
