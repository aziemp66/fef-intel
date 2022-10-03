import { useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className="sticky top-0 z-10 bg-white">
			{showMenu &&
				createPortal(
					<MobileMenu setShowMenu={setShowMenu} />,
					document.getElementById("mobile-menu")!
				)}
			<nav className="flex justify-between md:justify-between items-center w-full px-4 md:px-12">
				<div className="flex justify-around items-center gap-2">
					<img src="/logo/intel-logo.png" alt="fef" className="w-24 h-24" />
					<div className="flex-none w-[1px] h-16 bg-slate-400"></div>
					{/* <h1 className="font-medium text-xl md:text-3xl p-2">FEF INTEL</h1> */}
					<img className="h-24" src="/logo/fef-logo.png" alt="fef intel" />
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
						<a href="https://bit.ly/FasilkomEnglishFestival2022">
							Registration
						</a>
					</li>
					<li className="link-hover-animation text-xl">
						<Link to="/faq">FAQ</Link>
					</li>
				</ul>
				<div
					onClick={() => {
						setShowMenu(true);
						console.log(showMenu);
					}}
					className="flex md:hidden flex-col h-5 w-8 gap-1 cursor-pointer"
				>
					<div className="h-1 w-full bg-black rounded"></div>
					<div className="h-1 w-full bg-black rounded"></div>
					<div className="h-1 w-full bg-black rounded"></div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
