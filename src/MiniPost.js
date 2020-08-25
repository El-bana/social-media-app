import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import { Typography, Grid, IconButton } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { green } from "@material-ui/core/colors";

import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	inline: {
		display: "inline",
	},
	articleMeta: {
		display: "block",
		position: "relative",
	},
	info: {
		display: "inline-block",
		lineHeight: "1px",
	},
	img: {
		height: "32px",
		width: "32px",
		borderRadius: "50%",
	},
	userName: {
		display: "block",
	},
	favIcon: {
		float: "right",
	},
}));

export default function MiniPost({ userImage, userName, postTitle, postDesc }) {
	const classes = useStyles();

	return (
		<Grid item xs={12} className={classes.root}>
			<div className={classes.articleMeta}>
				<a href='#'>
					<img src={userImage} className={classes.img} />
				</a>
				<div className={classes.info}>
					<a>{userName}</a>
					<p>Date</p>
				</div>
				<div className={classes.favIcon}>
					<IconButton>
						<FavoriteIcon style={{ color: green[500] }} />
					</IconButton>
				</div>
			</div>
			{/* <div>
				<h1>{postTitle}</h1>
				<p>{postDesc}</p>
				<span>read more</span>
			</div> */}
		</Grid>
	);
}
