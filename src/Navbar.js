import React from "react";
import { Grid, List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
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
						<ListItemText primary={<Link to='/'>Home</Link>} />
					</ListItem>
					<ListItem>
						<ListItemText primary={<Link to='#'>Sign in</Link>} />
					</ListItem>
					<ListItem>
						<ListItemText primary={<Link to='#'>Sign up</Link>} />
					</ListItem>
				</List>
			</Grid>
		</Grid>
	);
}
