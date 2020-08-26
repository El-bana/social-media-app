import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		"& a": {
			textDecoration: "none",
			color: "black",
		},
	},
	inline: {
		display: "inline",
	},
	articleMeta: {
		display: "block",
		position: "relative",
		"& a": {
			color: "#5cb85c",
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
	favIcon: {
		float: "right",
	},
	divider: {
		margin: "1rem 0",
	},
	article: {
		"& h1": {
			fontWeight: "600",
			fontSize: "1.5rem",
			marginBottom: "3px",
		},
		"& p": {
			fontWeight: "300",
			color: "#999",
			marginBottom: "15",
			fontSize: "1rem",
			lineHeight: "1.3rem",
		},
		"& span": {
			maxWidth: "30%",
			fontSize: ".8rem",
			fontWeight: "300",
			color: "#bbb",
			verticalAlign: "middle",
		},
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
}));

export default useStyles;
