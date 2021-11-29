/** @format */
import styles from "../styles/Login.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import { useState } from "react";
import { OtpSend } from "../handlers/Auth";

export default function login() {
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password_confirmation, setPasswordConfirmation] = useState("");
	const [referral_code, setReferral_code] = useState("");
	return (
		<div id={styles.Login}>
			<img src='/images/app_logo.png' id={styles.LoginLogo} />
			<div id={styles.LoginDiv} className={styles.SignupDiv}>
				<div className={styles.LogSignHeading}>
					<h2>REGISTER</h2>
					<h4>Win Cash Daily</h4>
				</div>
				<form>
					<div className={styles.LogSignInputs}>
						<input
							type='text'
							id='mobile'
							name='mobile'
							autoComplete='off'
							placeholder='Mobile'
							value={mobile}
							onChange={(e) => setMobile(e.target.value)}
						/>
						<label htmlFor='mobile'>Mobile</label>
					</div>
					<br />

					<div className={styles.LogSignInputs}>
						<input
							type='text'
							id='email'
							name='email'
							autoComplete='off'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label htmlFor='email'>Email</label>
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
					<br />
					<div className={styles.LogSignInputs}>
						<input
							type='password'
							id='password_confirmation'
							name='password_confirmation'
							autoComplete='off'
							placeholder='Confirm Password'
							value={password_confirmation}
							onChange={(e) => setPasswordConfirmation(e.target.value)}
						/>
						<label htmlFor='password_confirmation'>Confirm Password</label>
					</div>
					<br />
					<div className={styles.LogSignInputs}>
						<input
							type='text'
							id='invite_code'
							name='invite_code'
							autoComplete='off'
							placeholder='Invite code'
							value={referral_code}
							onChange={(e) => setReferral_code(e.target.value)}
						/>
						<label htmlFor='invite_code'>Code</label>
					</div>

					<Button
						id={styles.LoginBtn}
						onClick={() =>
							OtpSend({
								mobile,
								email,
								password,
								password_confirmation,
								referral_code,
							})
						}>
						REGISTER
					</Button>

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
				Already have an account?{" "}
				<Link href='/login'>
					<a>Log in</a>
				</Link>{" "}
			</p>
		</div>
	);
}
