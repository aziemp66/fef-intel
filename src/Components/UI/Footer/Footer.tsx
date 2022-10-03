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
		></div>
	);
};

export default Footer;
