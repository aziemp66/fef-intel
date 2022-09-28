import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../../Styles/Swiper.css";

import CardContainer from "../../Components/Card/CardContainer";

type valueType = "Scrabble" | "Speech" | "Debate" | "Newscasting";

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
				{["Debate", "Speech", "Newscasting", "Scrabble"].map((competition) => {
					return (
						<SwiperSlide key={competition}>
							<CardContainer competition={competition as valueType} />
							<Link
								to={`/competitions/${competition}`}
								className="blue-button block my-8 text-center"
							>
								Details
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Competitions;
