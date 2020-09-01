import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import MiniPostList from "./MiniPostList";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Tags from "./Tags";
import { LoggedInContext } from "./Contexts/LoggedIn.context";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "white",
	},
	posts: {
		margin: "0 3rem",
	},
	tags: {
		margin: "1rem 0",
	},
}));

export default function Homepage() {
	const classes = useStyles();
	const { loggedIn, name, logIn, changeName } = useContext(LoggedInContext);

	useEffect(() => {
		if (localStorage.hasOwnProperty("token")) {
			const fetch = async () => {
				const res = await axios("https://conduit.productionready.io/api/user", {
					headers: { Authorization: `Token ${localStorage.getItem("token")}` },
				});
				logIn();
				changeName(res.data.user.username);
			};

			fetch();
		}
	}, [loggedIn, name, changeName, logIn]);

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
						<MiniPostList />
					</Grid>
					<Grid item sm={3} className={classes.tags}>
						<Hidden smDown>
							<Tags />
						</Hidden>
					</Grid>
				</Grid>
			</div>
		</Grid>
	);
}
