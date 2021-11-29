/** @format */
import styles from "../styles/Login.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Register } from "../handlers/Auth";
import { browserName } from "react-device-detect";
import Router from "next/router";
export default function login() {
	const [otp, setOtp] = useState("");
	const [userData, setUserData] = useState(""); //=>{}

	useEffect(() => {
		if (Object.keys(Router.query).length === 0) {
			return Router.push("/login");
		}
		setUserData(Router.query);
	}, []);

	useEffect(() => {
		if (otp.length == 4) {
			console.log("hit the api", otp);
			userData.otp = otp;
			return Register(userData).then((d) => {
				console.log("userdata: ", d);
				setOtp(d);
			});
		}
	}, [otp]);

	const HandleOtp = (e) => {
		var target = e.target.value;
		console.log(target.length);

		if (target.length < 5) {
			setOtp(target);
			return;
		}
	};
	console.log(userData);
	return (
		<div id={styles.Login}>
			<img src='/images/app_logo.png' id={styles.LoginLogo} />
			<div id={styles.LoginDiv}>
				<form>
					<div className={styles.LogSuggestion}>
						<p>OTP SENT TO {userData ? userData.phone : ""}</p>
					</div>
					<br />
					<div className={styles.LogOtpDiv}>
						<input type='number' value={otp} onChange={(e) => HandleOtp(e)} />
					</div>
					<br />
					<div className={styles.LogSuggestion}>
						<p>Or sign in using Social Media</p>
					</div>
					<br />
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
