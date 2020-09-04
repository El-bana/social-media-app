import React, { createContext, useState } from "react";

export const LoggedInContext = createContext();

export function LoggedInProvider(props) {
	const [user, setUser] = useState("");

	return (
		<LoggedInContext.Provider value={{ user, setUser }}>
			{props.children}
		</LoggedInContext.Provider>
	);
}
