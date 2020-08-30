import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#5cb85c",
		},
	},
});

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
}));

export default function SignInForm() {
	const classes = useStyles();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = axios.post(
			"https://conduit.productionready.io/api/users/login",
			{ user: { email: email, password: password } },
		);
		console.log(res);
	};
	return (
		<ThemeProvider theme={theme}>
			<Grid container justify='center'>
				<Grid item xs={12}>
					<Navbar />
				</Grid>
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
		</ThemeProvider>
	);
}