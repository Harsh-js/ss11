/** @format */

import "../styles/globals.scss";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { Toaster } from "react-hot-toast";
import TopNav from "../components/TopNav";
import Home from "../Layouts/Home";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps, router }) {
	// console.log(router.pathname.startsWith("/hi"));

	return (
		<main id='Mockup'>
			<main id='MockupIn'>
				<Toaster />
				{router.pathname.startsWith("/dashboard") ? (
					<Home>
						<Component {...pageProps} />
					</Home>
				) : router.pathname.startsWith("/more") ? (
					<Component {...pageProps} />
				) : (
					<Component {...pageProps} />
				)}
			</main>
		</main>
	);
}

export default MyApp;
