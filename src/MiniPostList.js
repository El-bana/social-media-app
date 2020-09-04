import React, { Component } from "react";
import MiniPost from "./MiniPost";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
	root: {
		width: "100%",
	},
	links: {
		textDecoration: "none",
		borderBottom: "2px solid #5cb85c",
		color: "#5cb85c",
		marginBotoom: "1rem",
		padding: "1rem",
	},
};
class MiniPostList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
		};
	}
	async componentDidMount() {
		const res = await axios.get(
			`https://conduit.productionready.io/api/articles?author=${this.props.name}`,
		);
		this.setState({
			articles: res.data.articles,
		});
		console.log(this.state.articles);
		console.log(this.props.name);
	}
	render() {
		const { classes } = this.props;
		const articles = this.state.articles.map((art) => (
			<MiniPost
				userName={art.author.username}
				userImage={art.author.image}
				postTitle={art.title}
				postDesc={art.description}
				postDate={art.createdAt}
				postLike={art.favoritesCount}
				slug={art.slug}
				key={uuid()}
			/>
		));
		return (
			<Grid
				container
				item
				direction='column'
				justify='flex-start'
				alignItems='flex-start'
			>
				<div className={classes.main}>
					<Link to='/' className={classes.links}>
						Global Feed
					</Link>
				</div>
				{articles}
			</Grid>
		);
	}
}

export default withStyles(styles)(MiniPostList);
