import React from "react";
// components
import Login from "./components/Login/Login";
// styles
import { GlobalStyle } from "./components/Styled/SGlobal";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Login />
		</>
	);
};

export default App;
