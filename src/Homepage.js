import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import MiniPostList from "./MiniPostList";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "white",
	},
}));

export default function Homepage() {
	const classes = useStyles();

	return (
		<div>
			{/**NAVBAR GOES HERE*/}
			<Grid item xs={12}>
				<h1>Navbar</h1>
			</Grid>
			{/**HEADER GOES HERE*/}
			<Grid item xs={12}>
				<h1>Header</h1>
			</Grid>
			{/**THE MAIN BODY WITH FEED AND TAGS*/}
			<div className={classes.root}>
				<Grid container spacing={0}>
					<Grid item sm={12} md={8}>
						<h1>hi hi hi</h1>
						<MiniPostList />
					</Grid>
					<Grid sm={4}>
						<Hidden smDown>
							<h1>Tags</h1>
						</Hidden>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
