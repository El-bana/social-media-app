import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import MiniPostList from "./MiniPostList";
import Navbar from "./Navbar";
import Banner from "./Banner";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "white",
	},
	posts: {
		margin: "0 4rem",
	},
}));

export default function Homepage() {
	const classes = useStyles();

	return (
		<Grid container>
			{/**NAVBAR GOES HERE*/}
			<Navbar />
			{/**HEADER GOES HERE*/}
			<Banner />
			{/**THE MAIN BODY WITH FEED AND TAGS*/}
			<div className={classes.root}>
				<Grid item container spacing={0}>
					<Grid item sm={12} md={8} className={classes.posts}>
						<h1>hi hi hi</h1>
						<MiniPostList />
					</Grid>
					<Grid sm={2}>
						<Hidden smDown>
							<h1>Tags</h1>
						</Hidden>
					</Grid>
				</Grid>
			</div>
		</Grid>
	);
}
