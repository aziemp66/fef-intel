import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
	const location = useLocation();
	const locationIsHome = location.pathname === "/";

	return (
		<div
			className={`w-full ${
				!locationIsHome
					? "h-[100px] bg-light-blue relative"
					: "h-[300px] bg-gradient-to-t from-bright-blue via-light-blue to-white absolute"
			} `}
		>
			<div className="relative">
				<a
					href="http://www.google.com"
					className="bg-green-400 rounded-full absolute -top-10 right-10 h-[75px] w-[75px]"
				>
					<img
						className="absolute w-full h-full"
						src="/items/whatsapp.svg"
						alt="whatsapp-icon"
					/>
				</a>
			</div>
		</div>
	);
};

export default Footer;
