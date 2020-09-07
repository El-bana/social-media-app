import React, { useEffect, useState } from "react";
import { Grid, Divider, TextField, Button } from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import useInputState from "./Hooks/useInputState";

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
	log: {
		position: "relative",
		margin: "auto",
		width: "100%",
		"& a": {
			color: "#5cb85c",
			textDecoration: "none",
			"&:hover": {
				color: "#336333",
				textDecoration: "underline",
			},
		},
		"& fieldset": {
			borderRadius: "0",
		},
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
	textArea: {
		margin: 0,
		borderRadius: "0",
	},
	btn: {
		color: "white",
		float: "right",
	},
}));

export default function Article(props) {
	const { slug } = props.match.params;
	const [article, setArticle] = useState({});
	const [author, setAuthor] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);
	const { value: comment, bind: bindComment, reset } = useInputState("");

	const submitComment = () => {
		axios
			.post(
				`https://conduit.productionready.io/api/articles/${slug}/comments`,
				{ comment: { body: comment } },
				{
					headers: {
						Authorization: `Token ${localStorage.getItem("token")}`,
					},
				},
			)
			.then(reset());
	};

	const classes = useStyles();
	useEffect(() => {
		const fetch = async () => {
			console.log(slug);
			try {
				if (localStorage.hasOwnProperty("token")) {
					const res = await axios(
						`https://conduit.productionready.io/api/articles/${slug}`,
						{
							headers: {
								Authorization: `Token ${localStorage.getItem("token")}`,
							},
						},
					);
					setAuthor(res.data.article.author);
					setArticle(res.data.article);
					setLoggedIn(true);
				} else {
					const res = await axios(
						`https://conduit.productionready.io/api/articles/${slug}`,
					);
					setAuthor(res.data.article.author);
					setArticle(res.data.article);
				}
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
			<Grid item xs={8} className={classes.log}>
				{!loggedIn && (
					<p>
						<Link to='/login'>Sign in</Link> or&nbsp;
						<Link to='/register'>Sign up</Link> to add comments on this article.
					</p>
				)}
				{loggedIn && (
					<>
						<TextField
							type='text'
							value={comment}
							placeholder='Write a comment....'
							variant='outlined'
							onChange={bindComment}
							multiline
							rows={5}
							margin='dense'
							fullWidth
							className={classes.textArea}
						/>
						<div className={classes.cardFooter}>
							<img src={author.image} />
							<Button
								color='primary'
								variant='contained'
								type='submit'
								className={classes.btn}
								onClick={submitComment}
							>
								Post Comment
							</Button>
						</div>
					</>
				)}
			</Grid>
		</Grid>
	);
}
