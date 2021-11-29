/** @format */
import MatchCard from "@/components/MatchCard";
import style from "@/styles/DashBoard.module.scss";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const StatusMap = ["Upcoming", "Live", "Completed"];

function myMatches() {
	// DashBoardMyMatchFilterBtnChecked
	const router = useRouter();
	return (
		<div className='DashBoardHome'>
			<div className={style.DashBoardMyMatchFilter}>
				{StatusMap.map((status) => {
					return (
						<Button
							className={style.DashBoardMyMatchFilterBtn}
							onClick={() =>
								router.push(
									{
										pathname: router.pathname,
										query: {
											sport: router.query.sport,
											status: status,
										},
									},
									undefined,
									{ shallow: true }
								)
							}
							id={
								router.query.status == status
									? "DashBoardMyMatchFilterBtnChecked"
									: ""
							}>
							{status}
						</Button>
					);
				})}
			</div>
		</div>
	);
}
export default myMatches;
