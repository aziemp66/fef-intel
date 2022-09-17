import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Home = () => {
	return (
		<div>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				grabCursor
				className="my-10"
			>
				<SwiperSlide>
					<img
						className="w-[1000px] h-[500px] mx-auto"
						src="https://source.unsplash.com/1000x500?event"
						alt="random"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="w-[1000px] h-[500px] mx-auto"
						src="https://source.unsplash.com/1000x500?party"
						alt="random"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="w-[1000px] h-[500px] mx-auto"
						src="https://source.unsplash.com/1000x500?competition"
						alt="random"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="w-[1000px] h-[500px] mx-auto"
						src="https://source.unsplash.com/1000x500?concert"
						alt="random"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="w-[1000px] h-[500px] mx-auto"
						src="https://source.unsplash.com/1000x500?meeting"
						alt="random"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Home;
