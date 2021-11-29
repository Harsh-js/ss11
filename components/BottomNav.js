/** @format */

import React from "react";
import { Button } from "@mui/material";
import MapData from "../constants/Maps/BottomNav.json";
import { useRouter } from "next/router";

function BottomNav() {
	const router = useRouter();

	return (
		<div id='BottomNav'>
			{MapData
				? MapData.map(({ title, icon, route }, index) => {
						return (
							<Button
								className='BottomNavBtn'
								id={router.pathname == route ? "BottomNavBtnChecked" : ""}
								key={index}
								onClick={() => router.push(route)}>
								<img
									src={icon}
									id={router.pathname == route ? "BottomNavBtnCheckedImg" : ""}
								/>
								{title}
							</Button>
						);
				  })
				: ""}
		</div>
	);
}

export default BottomNav;
