import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { LoggedInContext } from "./Contexts/LoggedIn.context";

const useStyles = makeStyles((theme) => ({
	main: {
		textAlign: "center",
		"& h1": {
			fontWeight: "400",
			color: "#373a3c",
			fontSize: "2.4rem",
			marginBottom: "0",
		},
		"& a": {
			color: "#5cb85c",
			textDecoration: "none",

			"&:hover": {
				textDecoration: "underline",
			},
		},
	},
	form: {
		width: "100%",
	},
	formItem: {
		margin: "0.3rem",
		color: "white",
	},
	errors: {
		textAlign: "left",
		color: "#b85c5c",
		fontWeight: "bold",
	},
}));

export default function SignInForm(props) {
	const classes = useStyles();
	const { setUser } = useContext(LoggedInContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState(false);
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		localStorage.clear();
		try {
			const res = await axios.post(
				"https://conduit.productionready.io/api/users/login",
				{ user: { email: email, password: password } },
			);
			setErrors(false);
			setUser(res.data.user.username);
			localStorage.setItem("token", res.data.user.token);
			localStorage.setItem("password", password);
			window.location = "/";
		} catch (error) {
			console.log(error.response.data.errors);
			setErrors(true);
		}
	};
	return (
		<Grid container justify='center'>
			<Grid
				container
				item
				sm={6}
				className={classes.main}
				direction='row'
				justify='center'
			>
				<Grid item xs={12}>
					<h1>Sign In</h1>
					<Link to='/register'>Need an account?</Link>
					{errors && (
						<ul className={classes.errors}>
							<li>email or password is invalid</li>
						</ul>
					)}
				</Grid>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid item xs={12}>
						<TextField
							type='email'
							value={email}
							label='Email'
							variant='outlined'
							onChange={handleEmailChange}
							className={classes.formItem}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							type='password'
							value={password}
							label='Password'
							variant='outlined'
							onChange={handlePasswordChange}
							className={classes.formItem}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							color='primary'
							variant='contained'
							type='submit'
							fullWidth
							className={classes.formItem}
						>
							Sign In
						</Button>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
}
