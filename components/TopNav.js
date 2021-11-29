/** @format */

import React, { useState } from "react";
import ChangeSportsNav from "./ChangeSportsNav";
import { Button } from "@mui/material";
import SideBarBtns from "./helpers/SideBarBtns";
import SideMap from "../constants/Maps/SideBarBtns.json";
import moment from "moment";
import { useRouter } from "next/router";

const useFullPaths = ["/dashboard", "/dashboard/my-matches"];

function TopNav() {
	const [isSide, setIsSide] = useState(false);
	const router = useRouter();
	// console.log(moment().diff("2021-11-30 17:00:00", "minutes"));
	console.log(router.pathname);
	return (
		<>
			<div id='ParentTopNav'>
				<div id='TopNav'>
					<img
						src='/images/ic_appbar_profile.png'
						width='35px'
						onClick={(e) => setIsSide(!isSide)}
					/>
					<h2>MyMaster11</h2>
					<div className='TopNavIcons'>
						<img src='/images/wallet_icon.png' />
						<img src='/images/notification_icon.png' />
					</div>
				</div>
				{useFullPaths.includes(router.pathname) ? <ChangeSportsNav /> : <></>}
			</div>
			<div
				id={isSide ? "SideMenuBar" : "SideMenuBarHide"}
				onClick={(e) => {
					e.target.id == "SideMenuBar" ? setIsSide(!isSide) : "";
				}}>
				<div id='SideMenu'>
					{isSide ? (
						<>
							<div className='SideBarUserDetails'>
								<div className='SideBarUser'>
									<img src='/images/ic_appbar_profile.png' width='35px' />
									<div>
										<h3>Harsh</h3>
										<h6>Level 24</h6>
									</div>
								</div>
								<img src='/images/right-arrow.png' width='30px' />
							</div>
							{SideMap ? (
								SideMap.map((maps) => {
									return <SideBarBtns maps={maps} />;
								})
							) : (
								<></>
							)}
						</>
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	);
}

export default TopNav;
