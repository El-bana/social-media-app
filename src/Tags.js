import React, { useEffect, useState } from "react";
import axios from "axios";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { v4 as uuid } from "uuid";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: grey[600],
		},
	},
});

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "5px 10px 10px",
		background: "#f3f3f3",
		borderRadius: 4,
		color: "#373a3c",
		"& a": {
			color: "white",
			textDecoration: "none",
		},
		"& > *": {
			margin: theme.spacing(0.2),
		},
	},
}));

export default function Tags() {
	const [tags, setTags] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		const fetchTags = async () => {
			const res = await axios.get(
				"https://conduit.productionready.io/api/tags",
			);
			setTags(res.data.tags);
		};
		fetchTags();
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<p>Popular Tags</p>
				{tags.map((tag) => (
					<Chip
						label={<Link to='/'>{tag}</Link>}
						clickable
						color='primary'
						key={uuid()}
					/>
				))}
			</div>
		</ThemeProvider>
	);
}
