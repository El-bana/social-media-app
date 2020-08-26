import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { green } from "@material-ui/core/colors";
import useStyles from "./Styles/MiniPostStyles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

export default function MiniPost({
	userImage,
	userName,
	postTitle,
	postDesc,
	postDate,
	postLike,
}) {
	const classes = useStyles();

	return (
		<Grid item xs={12} className={classes.root}>
			<Divider className={classes.divider} />

			<div className={classes.articleMeta}>
				<Link to='/'>
					<img src={userImage} alt='' className={classes.img} />
				</Link>
				<div className={classes.info}>
					<Link to='/' className={classes.author}>
						{userName}
					</Link>
					<p className={classes.date}>{postDate}</p>
				</div>
				<div className={classes.favIcon}>
					<IconButton size='small'>
						<FavoriteIcon style={{ color: green[500] }} />
						{postLike}
					</IconButton>
				</div>
			</div>
			<div className={classes.article}>
				<Link to='/'>
					<h1>{postTitle}</h1>
					<p>{postDesc}</p>
					<span>read more</span>
				</Link>
			</div>
		</Grid>
	);
}
