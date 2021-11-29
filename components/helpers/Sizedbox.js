/** @format */

import React from "react";

function Sizedbox({ width, height, bg }) {
	return (
		<div
			style={{
				width: `${width ? width : "100%"}`,
				height: `${height ? height : "100px"}`,
				backgroundColor: `${bg ? bg : "transparent"}`,
			}}></div>
	);
}

export default Sizedbox;
