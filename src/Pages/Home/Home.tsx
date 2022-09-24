import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "../../Styles/Swiper.css";

import DashLineTitle from "../../Components/UI/DashLineTitle/DashLineTitle";

import CardList from "../../Components/Card/CardList";

const Home = () => {
	return (
		<div>
			<Swiper
				modules={[Navigation]}
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				grabCursor
				className="my-32 w-[90%] md:w-4/5"
				navigation
			>
				<SwiperSlide>
					<img
						className="mx-auto"
						src="https://source.unsplash.com/800x450?event"
						alt="random"
						width={800}
						height={450}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="mx-auto"
						src="https://source.unsplash.com/800x450?party"
						alt="random"
						width={800}
						height={450}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="mx-auto"
						src="https://source.unsplash.com/800x450?competition"
						alt="random"
						width={800}
						height={450}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="mx-auto"
						src="https://source.unsplash.com/800x450?concert"
						alt="random"
						width={800}
						height={450}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="mx-auto"
						src="https://source.unsplash.com/800x450?meeting"
						alt="random"
						width={800}
						height={800}
					/>
				</SwiperSlide>
			</Swiper>
			<div className="flex flex-col md:flex-row justify-center items-center w-[full] md:w-4/5 mx-auto md:gap-16 bg-light-pink h-full rounded-xl shadow-2xl px-4 md:px-12 py-10 md:py-12 md:mb-24">
				<img
					className="w-[250px] h-[200px] md:w-[500px] md:h-[300px]"
					src="/logo/fef-logo.png"
					alt="fef-logo"
				/>
				<div className="flex flex-col gap-6">
					<h2 className="font-bold text-sm md:text-4xl">
						FEF INTEL UNSRI 2022
					</h2>
					<p className="text-sm md:text-xl font-medium">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ipsum
						euismod nullam proin ullamcorper sit enim sodales egestas. Phasellus
						eget semper elit, blandit risus lacus, elementum pretium, egestas. A
						sit integer egestas mauris. Mauris habitant nunc auctor commodo.
					</p>
					<p className="text-sm md:text-xl font-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
						minus doloremque quasi temporibus ullam quam deserunt voluptas sint
						repellendus sit.
					</p>
					<div>
						<Link
							className="bg-light-blue text-white px-6 py-2 font-semibold md:text-xl rounded-lg transition hover:bg-bright-blue duration-500"
							to={"/about-us"}
						>
							Learn More
						</Link>
					</div>
				</div>
			</div>

			<div className="relative w-full">
				<DashLineTitle color="#FFD658" text="Competition" />
			</div>
			<CardList />
			<div className="relative w-full">
				<DashLineTitle color="#F96B7E" text="Sponsorship" />
			</div>

			<div className="mx-auto w-4/5 md:w-3/4 min-h-[500px] md:h-[400px] bg-white border my-20 md:my-52 shadow-3xl rounded-xl"></div>
		</div>
	);
};

export default Home;
