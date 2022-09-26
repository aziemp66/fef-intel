import { useState, useEffect } from "react";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../../Styles/Swiper.css";

import CardContainer from "../../Components/Card/CardContainer";

const Competitions = () => {
	const [screenSize, setScreenSize] = useState(window.innerWidth);
	useEffect(() => {
		window.addEventListener(
			"resize",
			() => {
				setScreenSize(window.innerWidth);
			},
			false
		);
	}, [screenSize]);

	return (
		<div>
			<Swiper
				className="my-12 w-[90%] lg:w-4/5"
				modules={[Pagination]}
				pagination={{ clickable: true }}
				spaceBetween={
					(screenSize <= 650 && 10) || (screenSize <= 1080 && 40) || 80
				}
				slidesPerView={
					(screenSize <= 650 && 1) || (screenSize <= 1080 && 2) || 3
				}
				loop
			>
				<SwiperSlide>
					<CardContainer competition="Debate" />
				</SwiperSlide>
				<SwiperSlide>
					<CardContainer competition="Speech" />
				</SwiperSlide>
				<SwiperSlide>
					<CardContainer competition="Scrabble" />
				</SwiperSlide>
				<SwiperSlide>
					<CardContainer competition="Newscasting" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Competitions;
