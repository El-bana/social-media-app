import React, { useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	date: {
		float: "right",
	},
	comment: {
		border: "1px solid #e5e5e5",
		padding: "1rem",
	},
	cardFooter: {
		borderTop: "1px solid #e5e5e5",
		boxShadow: "none!important",
		fontSize: ".8rem",
		fontWeight: 300,
		padding: ".75rem 1.25rem",
		backgroundColor: "#f5f5f5",
		"& img": {
			height: 30,
			width: 30,
		},
	},
	cardBox: {
		position: "relative",
		margin: "auto",
		marginBottom: "1rem",
		width: "100%",
		"& a": {
			color: "#5cb85c",
			textDecoration: "none",
			"&:hover": {
				color: "#336333",
				textDecoration: "underline",
			},
		},
	},
	name: {
		fontSize: "1rem",
		margin: "0 1rem",
	},
}));

export default function Comments(props) {
	const classes = useStyles();

	return (
		<Grid item xs={8} className={classes.cardBox}>
			<div className={classes.comment}>
				<p>{props.body}</p>
			</div>
			<div className={classes.cardFooter}>
				<img src={props.image} />
				<Link to={`/${props.name}`} className={classes.name}>
					{props.name}
				</Link>
				<p className={classes.date}>{props.date}</p>
			</div>
		</Grid>
	);
}
