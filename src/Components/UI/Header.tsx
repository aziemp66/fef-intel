import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="flex justify-between items-center w-full">
			<div className="flex justify-center items-center gap-2">
				<img src="/logo/intel-logo.png" alt="fef" className="w-24 h-24" />
				<div className="w-[1px] h-16 bg-slate-400"></div>
				<h1 className="font-poppins font-medium text-3xl p-2">FEF INTEL</h1>
			</div>
			<ul className="flex">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about-us">About Us</Link>
				</li>
				<li>
					<Link to={"/competitions"}>Competitions</Link>
				</li>
				<li>
					<Link to="/faq">FAQ</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
