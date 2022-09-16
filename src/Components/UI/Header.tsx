import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="flex justify-between items-center w-full px-12">
			<div className="flex justify-around items-center gap-2">
				<img src="/logo/intel-logo.png" alt="fef" className="w-24 h-24" />
				<div className="w-[1px] h-16 bg-slate-400"></div>
				<h1 className="font-medium text-3xl p-2">FEF INTEL</h1>
			</div>
			<ul className="flex gap-20 px-8 w-full justify-center items-center">
				<li className="font-bold link-hover-animation">
					<Link to="/">Home</Link>
				</li>
				<li className="link-hover-animation">
					<Link to="/about-us">About Us</Link>
				</li>
				<li className="link-hover-animation">
					<Link to={"/competitions"}>Competitions</Link>
				</li>
				<li className="link-hover-animation">
					<Link to="/faq">FAQ</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
