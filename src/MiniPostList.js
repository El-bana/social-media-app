import React, { Component } from "react";
import MiniPost from "./MiniPost";
import axios from "axios";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const styles = {
	root: {
		width: "100%",
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
		let res = await axios.get(
			"https://conduit.productionready.io/api/articles",
		);
		let articles = res.data.articles;
		this.setState({
			articles: articles,
		});
	}
	render() {
		const { classes } = this.props;
		const articles = this.state.articles.map((art) => (
			<MiniPost
				userName={art.author.username}
				userImage={art.author.image}
				postTitle={art.title}
				postDesc={art.description}
			/>
		));
		return (
			<Grid
				container
				direction='column'
				justify='flex-start'
				alignItems='flex-start'
			>
				{articles}
			</Grid>
		);
	}
}

export default withStyles(styles)(MiniPostList);
