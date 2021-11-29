/** @format */

import { useRouter } from "next/router";
import BottomNav from "../components/BottomNav";
import Sizedbox from "../components/helpers/Sizedbox";
import TopNav from "../components/TopNav";
const useFullPaths = ["/dashboard", "/dashboard/my-matches"];

export default function Layout({ children }) {
	const router = useRouter();
	return (
		<>
			<TopNav />
			<Sizedbox
				height={useFullPaths.includes(router.pathname) ? "110px" : "50px"}
			/>
			{children}
			<Sizedbox height='60px' />
			<BottomNav />
		</>
	);
}
