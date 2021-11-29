/** @format */

import React from "react";

function MatchCard() {
	return (
		<div className='MatchCard'>
			<p>Austalia vs England</p>
			<div className='MatchCardMiddle'>
				<div className='MatchCardTeams'>
					<p>Australia</p>
					<div>
						<img src='/images/america.png' /> <h3>AUS</h3>
					</div>
				</div>
				<div className='MatchCardStatus'>
					<span className='RedDot'></span> Live
				</div>
				<div className='MatchCardTeams'>
					<p className='MatchCardTeamB'>Australia</p>
					<div>
						<h3>AUS</h3>
						<img src='/images/india.png' />
					</div>
				</div>
			</div>
			<div className='MatchCardInfo'>
				<p>1 Team</p>
				<p>1 Contest</p>
			</div>
		</div>
	);
}

export default MatchCard;
