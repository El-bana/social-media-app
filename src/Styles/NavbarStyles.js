import { makeStyles } from "@material-ui/core/styles";
import "../assets/css/titilliumWeb.css";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "0.5rem 1rem",
	},
	logo: {
		fontFamily: "titillium web,sans-serif",
		fontSize: "1.5rem",
		paddingTop: "0",
		marginRight: "2rem",
		color: "#5cb85c",
		textDecoration: "none",
		fontWeight: "700",
		marginLeft: "3rem",
	},
	flexContainer: {
		display: "flex",
		flexDirection: "row",
		padding: "0",
		float: "right",
		whiteSpace: "nowrap",
		"& a": {
			textDecoration: "none",
			color: "rgba(0,0,0,.3)",
			fontWeight: "500",
			fontSize: "1rem",
			"&:hover": {
				color: "rgba(0,0,0,0.6)",
			},
		},
	},
	active: {
		"& a": {
			color: "black",
		},
	},
}));

export default useStyles;
