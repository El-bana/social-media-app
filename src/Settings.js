import React, { useContext } from "react";
import { Grid, TextField, Button, Divider } from "@material-ui/core";
import useInputState from "./Hooks/useInputState";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import "./assets/css/titilliumWeb.css";
import { LoggedInContext } from "./Contexts/LoggedIn.context";

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: "center",
		fontFamily: "titillium web,sans-serif",
		"& h1": {
			fontWeight: "400",
			fontSize: "2.5rem",
			color: "rgba(0,0,0,0.7)",
		},
	},
	logOut: {
		float: "right",
	},
	signIn: {
		float: "left",
	},
}));

export default function Settings() {
	const { user } = useContext(LoggedInContext);
	const { value: image, bind: bindImage } = useInputState(user.image);
	const { value: username, bind: bindUsername } = useInputState(user.username);
	const { value: bio, bind: bindBio } = useInputState(user.bio);
	const { value: email, bind: bindEmail } = useInputState(user.email);
	const { value: password, bind: bindPassword } = useInputState(
		localStorage.getItem("password"),
	);
	const classes = useStyles();

	const handleLogOut = () => {
		localStorage.clear();
		window.location = "/";
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.put(
				"https://conduit.productionready.io/api/user",
				{
					user: {
						email: email,
						bio: bio,
						image: image,
						username: username,
						password: password,
					},
				},
				{
					headers: { Authorization: `Token ${localStorage.getItem("token")}` },
				},
			)
			.then((res) => {
				console.log(res);
				localStorage.setItem("password", password);
				window.location = "/";
			})
			.catch((err) => console.log(err));
	};

	return (
		<Grid
			container
			xs={12}
			direction='row'
			justify='center'
			alignItems='center'
		>
			<Grid item xs={6} className={classes.root}>
				<h1>Your Settings</h1>
				<form onSubmit={handleSubmit}>
					<TextField
						type='text'
						value={image}
						placeholder='url of picture'
						variant='outlined'
						onChange={bindImage}
						margin='dense'
						fullWidth
					/>
					<TextField
						type='text'
						value={username}
						placeholder='Username'
						variant='outlined'
						onChange={bindUsername}
						margin='normal'
						fullWidth
					/>
					<TextField
						type='text'
						value={bio}
						placeholder='Short bio about you'
						variant='outlined'
						onChange={bindBio}
						margin='normal'
						multiline
						rows={8}
						fullWidth
					/>
					<TextField
						type='text'
						value={email}
						placeholder='Email'
						variant='outlined'
						onChange={bindEmail}
						margin='normal'
						fullWidth
					/>
					<TextField
						type='password'
						value={password}
						placeholder='Password'
						variant='outlined'
						onChange={bindPassword}
						margin='normal'
						fullWidth
					/>
					<Divider style={{ margin: "1rem" }} />
					<Button
						color='primary'
						variant='contained'
						type='submit'
						className={classes.signIn}
					>
						Update Settings
					</Button>

					<Button
						variant='contained'
						color='secondary'
						className={classes.logOut}
						onClick={handleLogOut}
					>
						Log Out
					</Button>
				</form>
			</Grid>
		</Grid>
	);
}
