import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import DashLineTitle from "../../Components/UI/DashLineTitle/DashLineTitle";

import CardList from "../../Components/Card/CardList";

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
			<div className="flex justify-center items-center w-4/5 mx-auto gap-16 bg-light-pink h-[600px] rounded-xl shadow-2xl px-32">
				<div className="w-[2000px] h-[2000px] flex justify-center items-center">
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
							className="bg-light-blue text-white px-6 py-2 font-semibold text-xl rounded-lg transition hover:bg-bright-blue duration-500"
							to={"/about-us"}
						>
							Learn More
						</Link>
					</div>
				</div>
			</div>

			<div className="relative w-full mt-44 gap-4">
				<DashLineTitle color="yellow" text="Competition" />
			</div>
			<CardList />
			<div className="relative w-full my-44 gap-4">
				<DashLineTitle color="yellow" text="Sponsorship" />
			</div>

			<div className="mx-auto w-1/2 h-[250px] bg-white border my-52 shadow-3xl rounded-xl"></div>
		</div>
	);
};

export default Home;
