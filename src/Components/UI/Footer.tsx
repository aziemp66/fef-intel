import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
	const location = useLocation();
	const locationIsHome = location.pathname === "/";

	return <div></div>;
};

export default Footer;
