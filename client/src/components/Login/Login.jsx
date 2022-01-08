import React from "react";
import Logo from "../Logo";
import { ForgetPassword, Wrapper } from "../Styled/SLogin";

const Login = () => {
	return (
		<Wrapper>
			<div className="BGImage">
				<Logo />
			</div>
			<div className="LoginDiv">
				<div className="">
					<h1 className="LoginHeader">Sign in to your land</h1>
					<div className="LoginCard">
						<p className="usernameLabel">Username or email address</p>
						<input type="text" className="usernameInput" id="" />
						<p className="passwordLabel">
							Password
							<a className="forgetPassword" href="">
								Forgot password?
							</a>
						</p>
						<input type="text" className="passwordInput" id="" />
						<button className="signInButton">Sign in</button>
					</div>
				</div>
				<div className="signUpDiv">
					<p className="signUpP">
						new here? <a href="">Create an account</a>
					</p>
				</div>
				<div>
					<p className="BGLogo">
						Bibliophile<span className="BGLogoSpan"> Land</span>
					</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default Login;
