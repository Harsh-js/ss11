/** @format */

import MatchCard from "../../components/MatchCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Pagination } from "swiper";

function index() {
	return (
		<div className='DashBoardHome'>
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				autoplay={true}
				className='mySwiper'>
				<SwiperSlide className='MySwiperSlide'>
					<img src='https://picsum.photos/300/60' />
				</SwiperSlide>
				<SwiperSlide className='MySwiperSlide'>
					<img src='https://picsum.photos/300/60' />
				</SwiperSlide>
				<SwiperSlide className='MySwiperSlide'>
					<img src='https://picsum.photos/300/60' />
				</SwiperSlide>
				<SwiperSlide className='MySwiperSlide'>
					<img src='https://picsum.photos/300/60' />
				</SwiperSlide>
			</Swiper>
			<h3 className='DashbardHomeHeading'> {"    Upcoming Matches"} </h3>
			<MatchCard />
			<MatchCard />
			<MatchCard />
			<MatchCard />
			<MatchCard />
		</div>
	);
}
export default index;
