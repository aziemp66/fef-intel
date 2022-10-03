import { Link } from "react-router-dom";

type MobileMenuProps = {
	setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = ({ setShowMenu }: MobileMenuProps) => {
	console.log("MobileMenu");

	return (
		<nav
			onClick={() => setShowMenu(false)}
			className="bg-[rgba(20,20,20,0.95)] z-20 fixed pt-40 justify-start items-center w-full h-full flex flex-col gap-16 md:hidden"
		>
			<Link className="text-white font-bold text-center text-lg" to="/">
				Home
			</Link>
			<Link
				className="text-white font-bold text-center text-lg"
				to="/competitions"
			>
				Competitions
			</Link>
			<a
				className="text-white font-bold text-center text-lg"
				href="https://bit.ly/FasilkomEnglishFestival2022"
			>
				Registration
			</a>
			<Link className="text-white font-bold text-center text-lg" to="/about-us">
				About Us
			</Link>
			<Link className="text-white font-bold text-center text-lg" to="/faq">
				FAQ
			</Link>
		</nav>
	);
};

export default MobileMenu;
