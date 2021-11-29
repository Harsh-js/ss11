/** @format */

import React from "react";
import { Button } from "@mui/material";
import MapData from "../constants/Maps/ChangeSportsNav.json";
import { useRouter } from "next/router";

function ChangeSportsNav() {
	const router = useRouter();

	return (
		<div className='ChangeSportsNav'>
			{MapData
				? MapData.map(({ title, icon, route }, index) => {
						return (
							<Button
								className='BottomNavBtn'
								id={
									router.query.sport == title
										? "BottomNavBtnChecked"
										: !router.query.sport && title == "Cricket"
										? "BottomNavBtnChecked"
										: ""
								}
								key={index}
								onClick={() =>
									router.push(
										{
											pathname: router.pathname,
											query: {
												sport: title,
												status: router.query.status,
											},
										},
										undefined,
										{ shallow: true }
									)
								}>
								<img src={icon} />
								{title}
							</Button>
						);
				  })
				: ""}
		</div>
	);
}

export default ChangeSportsNav;
