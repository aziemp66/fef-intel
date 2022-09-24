import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="flex justify-between md:justify-between items-center w-full px-4 md:px-12">
			<div className="flex justify-center md:justify-around items-center gap-2">
				<img src="/logo/intel-logo.png" alt="fef" className="w-24 h-24" />
				<div className="w-[1px] h-16 bg-slate-400"></div>
				<h1 className="font-medium text-xl md:text-3xl p-2">FEF INTEL</h1>
			</div>
			<ul className="hidden md:flex gap-20 px-8 w-full justify-center items-center">
				<li className="font-bold link-hover-animation text-xl">
					<Link to="/">Home</Link>
				</li>
				<li className="link-hover-animation text-xl">
					<Link to="/about-us">About Us</Link>
				</li>
				<li className="link-hover-animation text-xl">
					<Link to={"/competitions"}>Competitions</Link>
				</li>
				<li className="link-hover-animation text-xl">
					<Link to="/faq">FAQ</Link>
				</li>
			</ul>
			<div className="flex md:hidden flex-col h-5 w-8 gap-1 cursor-pointer">
				<div className="h-1 w-full bg-black rounded"></div>
				<div className="h-1 w-full bg-black rounded"></div>
				<div className="h-1 w-full bg-black rounded"></div>
			</div>
		</nav>
	);
};

export default Header;
