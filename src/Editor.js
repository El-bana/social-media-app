import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import useInputState from "./Hooks/useInputState";
import axios from "axios";
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#5cb85c",
		},
	},
});

const useStyles = makeStyles((theme) => ({
	btn: {
		color: "white",
		float: "right",
		padding: "1rem",
		fontSize: "1rem",
		fontWeight: "500",
	},
}));

export default function Editor() {
	const { value: title, bind: bindTitle } = useInputState("");
	const { value: description, bind: bindDescription } = useInputState("");
	const { value: body, bind: bindBody } = useInputState("");
	const { value: tags, bind: bindTags } = useInputState("");
	const classes = useStyles();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				"https://conduit.productionready.io/api/articles",
				{
					article: {
						title: title,
						description: description,
						body: body,
						tagList: tags.split(" "),
					},
				},
				{
					headers: {
						Authorization: `Token ${localStorage.getItem("token")}`,
					},
				},
			);
			console.log(res);
			window.location = `/article/${res.data.article.slug}`;
		} catch (error) {
			console.log("error");
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				xs={12}
				direction='row'
				justify='center'
				alignItems='center'
			>
				<Grid item xs={9}>
					<form onSubmit={handleSubmit}>
						<TextField
							type='text'
							value={title}
							placeholder='Article Title'
							variant='outlined'
							onChange={bindTitle}
							margin='normal'
							fullWidth
						/>
						<TextField
							type='text'
							value={description}
							placeholder='What is this about ?'
							variant='outlined'
							onChange={bindDescription}
							multiline
							rows={1}
							margin='dense'
							fullWidth
						/>
						<TextField
							type='text'
							value={body}
							placeholder='Write your article (in markdown)'
							variant='outlined'
							onChange={bindBody}
							multiline
							rows={8}
							margin='dense'
							fullWidth
						/>
						<TextField
							type='text'
							value={tags}
							placeholder='Enter your Tags " " space seperated'
							variant='outlined'
							onChange={bindTags}
							margin='dense'
							fullWidth
						/>
						<Button
							color='primary'
							variant='contained'
							type='submit'
							className={classes.btn}
						>
							Publish Article
						</Button>
					</form>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
