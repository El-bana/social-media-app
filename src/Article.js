import React, { useEffect, useState } from "react";
import { Grid, Divider } from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	banner: {
		width: "100%",
		backgroundColor: "rgba(0,0,0,0.8)",
		color: "white",
	},
	articleMeta: {
		display: "block",
		position: "relative",
		margin: "2rem",
		"& a": {
			color: "white",
			textDecoration: "none",
		},
	},
	info: {
		display: "inline-block",
		lineHeight: "1px",
	},
	img: {
		height: "32px",
		width: "32px",
		borderRadius: "50%",
		marginRight: "0.4rem",
	},
	userName: {
		display: "block",
	},
	date: {
		color: "#bbb",
		fontSize: ".8rem",
		display: "block",
		marginTop: "1rem",
	},
	author: {
		display: "block",
		fontWeight: "500",
	},
	articleBody: {
		color: "rgba(0,0,0,0.7)",
		fontFamily: "source serif pro, serif",
		fontSize: "1.2rem",
		lineHeight: "1.8rem",
		marginBottom: "2rem",
		padding: "0 2rem",
	},
}));

export default function Article(props) {
	const { slug } = props.match.params;
	const [article, setArticle] = useState({});
	const [author, setAuthor] = useState({});
	const classes = useStyles();
	useEffect(() => {
		const fetch = async () => {
			try {
				const res = await axios(
					`https://conduit.productionready.io/api/articles/${slug}`,
					{
						headers: {
							Authorization: `Token ${localStorage.getItem("token")}`,
						},
					},
				);
				console.log(res.data.article);
				setAuthor(res.data.article.author);
				setArticle(res.data.article);
			} catch (error) {
				console.log("error");
			}
		};
		fetch();
	}, []);

	return (
		<Grid container direction='column'>
			<Grid item xs={12} className={classes.banner}>
				<div className={classes.articleMeta}>
					<h1>{article.title}</h1>
					<Link to={`/${author.username}`}>
						<img src={author.image} alt='' className={classes.img} />
					</Link>
					<div className={classes.info}>
						<Link to={`/${author.username}`} className={classes.author}>
							{author.username}
						</Link>
						<p className={classes.date}>{article.createdAt}</p>
					</div>
				</div>
			</Grid>
			<Grid item xs={12} className={classes.articleBody}>
				<p>{article.body}</p>
				<Divider />
			</Grid>
		</Grid>
	);
}
