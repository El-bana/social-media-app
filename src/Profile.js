import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MiniPostList from "./MiniPostList";
import { LoggedInContext } from "./Contexts/LoggedIn.context";
import "./assets/css/titilliumWeb.css";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "white",
	},
	posts: {
		margin: "0 3rem",
	},

	banner: {
		backgroundColor: "rgba(0,0,0,0.05)",
		textAlign: "center",
		color: "black",
		fontFamily: "titillium web,sans-serif",
		lineHeight: "1.5",
		marginBottom: "1rem",
		"& h1": {
			fontWeight: "500",
		},
	},
	image: {
		width: 100,
		height: 100,
		marginTop: "1rem",
	},
}));

export default function Profile(props) {
	const classes = useStyles();
	const { user } = useContext(LoggedInContext);
	const { image, username } = user;

	return (
		<Grid container>
			{/**HEADER GOES HERE*/}
			<Grid item xs={12} className={classes.banner}>
				<div>
					<img src={image} className={classes.image} />
					<h1 className={classes.name}>{username}</h1>
				</div>
			</Grid>
			{/**THE MAIN BODY WITH FEED AND TAGS*/}
			<div className={classes.root}>
				<Grid item container spacing={0}>
					<Grid item sm={12} className={classes.posts}>
						<MiniPostList name={props.match.params.username} />
					</Grid>
				</Grid>
			</div>
		</Grid>
	);
}
