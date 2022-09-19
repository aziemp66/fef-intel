import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import DashLineTitle from "../../Components/UI/DashLineTitle/DashLineTitle";

const Home = () => {
	return (
		<div>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
				}}
				grabCursor
				className="my-32"
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
			<div className="flex justify-center items-center w-4/5 mx-auto gap-16 bg-light-pink h-[600px] rounded-xl shadow-2xl px-32">
				<div className="w-[1000px] h-[1000px] flex justify-center items-center">
					<img className="rounded-xl" src="/logo/fef-logo.png" alt="fef-logo" />
				</div>

				<div className="flex flex-col gap-6">
					<h2 className="font-bold text-4xl">FEF INTEL UNSRI 2022</h2>
					<p className="text-xl font-medium">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ipsum
						euismod nullam proin ullamcorper sit enim sodales egestas. Phasellus
						eget semper elit, blandit risus lacus, elementum pretium, egestas. A
						sit integer egestas mauris. Mauris habitant nunc auctor commodo.
					</p>
					<p className="text-xl font-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
						minus doloremque quasi temporibus ullam quam deserunt voluptas sint
						repellendus sit.
					</p>
					<div>
						<Link
							className="bg-light-blue text-white px-6 py-2 font-semibold text-xl rounded-lg"
							to={"/about-us"}
						>
							Learn More
						</Link>
					</div>
				</div>
			</div>
			<DashLineTitle color="#FFD658" text="Competition" />
		</div>
	);
};

export default Home;
