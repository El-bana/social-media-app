import React, { createContext, useState } from "react";

export const LoggedInContext = createContext();

export function LoggedInProvider(props) {
	const [loggedIn, setLoggedIn] = useState(false);
	const [name, setName] = useState("user");

	const logIn = () => setLoggedIn(true);
	const changeName = (val) => setName(val);

	return (
		<LoggedInContext.Provider value={{ loggedIn, name, logIn, changeName }}>
			{props.children}
		</LoggedInContext.Provider>
	);
}
