import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
	main: {
		textAlign: "center",
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
	return (
		<Grid container>
			<Grid item xs={12}>
				<Navbar />
			</Grid>
			<Grid item xs={12} className={classes.main}>
				<h1>Sign In</h1>
				<form className={classes.form}>
					<TextField
						type='text'
						value={email}
						label='Email'
						variant='outlined'
						onChange={handleEmailChange}
					/>
					<TextField
						type='password'
						value={password}
						label='Password'
						variant='outlined'
						onChange={handlePasswordChange}
					/>
					<Button color='primary' variant='contained' type='submit'>
						Sign In
					</Button>
				</form>
			</Grid>
		</Grid>
	);
}
