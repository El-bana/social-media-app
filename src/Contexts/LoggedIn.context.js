import React, { createContext, useState } from "react";

export const LoggedInContext = createContext();

export function LoggedInProvider(props) {
	const [loggedIn, setLoggedIn] = useState(false);
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [articles, setArticles] = useState([]);

	const logIn = () => setLoggedIn(true);
	const changeName = (val) => setName(val);
	const changeImage = (val) => setImage(val);
	const changeArticles = (val) => setArticles(val);

	return (
		<LoggedInContext.Provider
			value={{ loggedIn, name, logIn, changeName, changeImage }}
		>
			{props.children}
		</LoggedInContext.Provider>
	);
}
