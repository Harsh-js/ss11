/** @format */
import styles from "../styles/Login.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import { useState } from "react";
import { Login } from "../handlers/Auth";
import { browserName } from "react-device-detect";
export default function login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div id={styles.Login}>
			<img src='/images/app_logo.png' id={styles.LoginLogo} />
			<div id={styles.LoginDiv}>
				<div className={styles.LogSignHeading}>
					<h2>LOGIN</h2>
					<h4>Win Cash Daily</h4>
				</div>
				<form>
					<div className={styles.LogSignInputs}>
						<input
							type='text'
							id='email'
							name='email'
							autoComplete='off'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value.toLowerCase())}
						/>
						<label htmlFor='email'>Login</label>
					</div>
					<br />
					<div className={styles.LogSignInputs}>
						<input
							type='password'
							id='password'
							name='password'
							autoComplete='off'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label htmlFor='password'>Password</label>
					</div>

					<div className={styles.forgotPassLine}>
						<a>Forgot Password ?</a>
					</div>

					<Button
						id={styles.LoginBtn}
						onClick={() => Login({ email, password })}>
						Login
					</Button>

					<div className={styles.LogSuggestion}>
						<Link href='/forgot-password'>
							<a>Log in using Mobile Number</a>
						</Link>
					</div>
					<br />
					<div className={styles.LogSuggestion}>
						<p>Or sign in using Social Media</p>
					</div>
					<br />
					<div className={styles.LogSuggestion}>
						<img src='/images/ic_facebook.png' />
						<img src='/images/ic_google_plus.png' />
					</div>
				</form>
			</div>

			<p>
				New to Dream11?{" "}
				<Link href='/register'>
					<a>Register</a>
				</Link>{" "}
			</p>
		</div>
	);
}
