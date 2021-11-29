/** @format */

import Head from "next/head";
import Image from "next/image";
import Sizedbox from "../components/helpers/Sizedbox";
import styles from "../styles/Home.module.scss";
import { Button } from "@mui/material";
import Router from "next/router";
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
} from "react-device-detect";
export default function Home() {
	console.log(isMobile);
	return (
		<div id={styles.HomePage}>
			<div id={styles.SplashDiv}>
				<div id={styles.HomeLogSignDiv}>
					<Button
						className={styles.HomeLogBtn}
						onClick={() => Router.push("/login")}>
						Login
					</Button>

					<Button
						className={styles.HomeLogBtn}
						onClick={() => Router.push("/register")}>
						Signup
					</Button>
					<img src='/images/app_logo.png' />
				</div>
				<img src='/assets/soccer.jpg' id={styles.SplashImg} />
			</div>

			<div className={styles.HomeHeading}>
				<img src='/images/app_logo.png' />
				<img src='/images/india.png' />
			</div>
			{/* <Component2 /> */}
			<div className={styles.HomePagePlayerDiv}>
				<span>Value</span>
				<p>$ 99,1 M</p>
				<span>Total</span>
				<p>300PTS</p>
				<span>Postion</span>
				<p>1ST</p>
				<img src='/images/player_image.png' />
			</div>
			<img src='/assets/Component 1.png' id={styles.HomePageImg2} />
			{isMobile ? <Sizedbox height={"100px"} /> : ""}
			{!isMobile ? (
				<div id={styles.DHomeLogSignDiv}>
					<Button
						className={styles.DHomeLogBtn}
						onClick={() => Router.push("/login")}>
						Login
					</Button>

					<Button
						className={styles.DHomeLogBtn}
						onClick={() => Router.push("/register")}>
						Signup
					</Button>
					<img src='/images/app_logo.png' />
				</div>
			) : (
				""
			)}
		</div>
	);
}
