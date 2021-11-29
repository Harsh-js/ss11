/** @format */

import React from "react";
import { Button } from "@mui/material";

function SideBarBtns({ maps }) {
	const { title, route, icon, innerIcon } = maps;
	return (
		<Button className='SideBarBtn'>
			<div className='SideBarBtnIn'>
				<img src={icon} width='20px' />
				{title}
			</div>
			{innerIcon ? (
				<Button className='SideBarBtnInBtn'>{innerIcon}</Button>
			) : (
				""
			)}
		</Button>
	);
}

export default SideBarBtns;
