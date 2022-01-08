import styled from "styled-components";
import BGImage from "../../assets/BGLogin.jpg";

export const Wrapper = styled.div`
	display: flex;

	// Background Login Image Section
	.BGImage {
		top: 0;
		height: 100vh;
		width: 48%;
		background-image: url(${BGImage});
		background-size: cover;
	}

	// Login Div Section
	.LoginDiv {
		margin: 10% auto;
	}

	.LoginHeader {
		max-width: 220px;
		line-height: 1;
		text-align: center;
		margin: auto;
		margin-bottom: 30px;
		color: #dedede;
		font-size: 36px;
		font-weight: 500;
	}

	// Login Card
	.LoginCard {
		padding: 35px;
		background-color: #1c272c;
		border-radius: 10px;
		height: 220px;
		width: 300px;
	}

	.usernameLabel,
	.passwordLabel {
		position: relative;
		color: #ebebeb;
		font-size: 15px;
		width: 100%;
	}

	.forgetPassword {
		position: absolute;
		right: 5px;
	}

	a {
		text-decoration: none;
		color: #8ba5ff;
		font-size: 13px;
	}

	.usernameInput,
	.passwordInput {
		width: 90%;
		height: 40px;
		border-radius: 5px;
		border: none;
		background-color: #0d1117;
		margin-top: 1%;
		margin-bottom: 4%;
		padding: 0 5%;
		color: #ebebeb;
		font-size: 15px;
		font-family: "Montserrat", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}

	input:focus {
		outline: none;
	}

	.signInButton {
		font-family: "Montserrat";
		width: 100%;
		height: 40px;
		background-color: #529a47;
		color: #fff;
		font-size: 18px;
		font-weight: 500;
		border-radius: 5px;
		border: none;
		margin-top: 12%;
		cursor: pointer;
	}

	// SignUP Div
	.signUpDiv {
		position: relative;
		z-index: 2;
		text-align: center;
		margin-top: 20px;
		background-color: #1c272c;
		width: 330px;
		border-radius: 10px;
		padding: 20px;
	}

	.signUpP {
		color: #ebebeb;
	}

	// Background Logo
	.BGLogo {
		z-index: 1;
		font-size: 10em;
		color: #fff;
		opacity: 10%;
		position: absolute;
		bottom: 0;
		right: 10px;
		max-width: 1000px;
		text-align: end;
	}

	.BGLogoSpan {
		font-weight: 600;
	}

	// Responsive
	@media only screen and (max-width: 1400px) {
		.BGImage {
			display: none;
		}

		.LoginDiv {
			margin-top: 15%;
		}

		.BGLogo {
			display: none;
		}
	}

	@media only screen and (max-height: 900px) {
		.BGLogo {
			display: none;
		}
	}
`;
