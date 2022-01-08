import React from "react";
//styles
import styled from "styled-components";

const Logo = () => {
	return (
		<Container>
			<span>Bibliophile</span> Land
		</Container>
	);
};

export default Logo;

const Container = styled.h1`
	cursor: pointer;
	margin-top: 2%;
	margin-left: 10%;
	font-size: 28;
	color: #d9d9d9;
	font-weight: 600;

	span {
		color: #cbcbcb;
		font-weight: 400;
	}
`;
