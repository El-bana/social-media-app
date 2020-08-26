import React from "react";
import Grid from "@material-ui/core/Grid";
import "./assets/css/titilliumWeb.css";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#5cb85c",
		textAlign: "center",
		color: "white",
		fontFamily: "titillium web,sans-serif",
		lineHeight: "1.5",
		marginBottom: "1rem",
		boxShadow:
			"inset 0 8px 8px -8px rgba(0,0,0,.3), inset 0 -8px 8px -8px rgba(0,0,0,.3)",
	},
	logo: {
		fontWeight: "700",
		fontSize: "3.5rem",
		textShadow: "0 1px 3px rgba(0,0,0,.3)",
		margin: "0.5rem",
	},
	secondaryText: {
		fontSize: "1.5rem",
		fontWeight: "300",
		margin: "0.5rem",
	},
}));
export default function Banner() {
	const classes = useStyles();
	return (
		<Grid item xs={12} className={classes.root}>
			<div>
				<h1 className={classes.logo}>conduit</h1>
				<p className={classes.secondaryText}>
					A place to share your knowledge.
				</p>
			</div>
		</Grid>
	);
}
