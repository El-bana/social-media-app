import React from "react";
import { Grid, List, ListItem } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import useStyles from "./Styles/NavbarStyles";

export default function Navbar() {
	const classes = useStyles();

	return (
		<Grid container item xs={12} className={classes.root}>
			<Grid item xs={6}>
				<Link to='/' className={classes.logo}>
					conduit
				</Link>
			</Grid>
			<Grid item xs={5}>
				<List className={classes.flexContainer} dense>
					<ListItem>
						<ListItemText
							primary={
								<NavLink
									exact
									to='/'
									activeStyle={{
										color: "rgba(0,0,0,0.6)",
									}}
								>
									Home
								</NavLink>
							}
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							primary={
								<NavLink
									exact
									to='/login'
									activeStyle={{
										color: "rgba(0,0,0,0.6)",
									}}
								>
									Sign in
								</NavLink>
							}
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							primary={
								<NavLink
									exact
									to='/register'
									activeStyle={{
										color: "rgba(0,0,0,0.6)",
									}}
								>
									Sign up
								</NavLink>
							}
						/>
					</ListItem>
				</List>
			</Grid>
		</Grid>
	);
}
