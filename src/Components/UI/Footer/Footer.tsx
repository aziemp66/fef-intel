import { useLocation } from "react-router-dom";
import { ReactComponent as InstagramLogo } from "../../../Assets/Icons/instagram.svg";
import { ReactComponent as FacebookLogo } from "../../../Assets/Icons/facebook.svg";
import { ReactComponent as LineLogo } from "../../../Assets/Icons/line.svg";
import { ReactComponent as GmailLogo } from "../../../Assets/Icons/gmail.svg";

const Footer = () => {
	const location = useLocation();
	const locationIsHome = location.pathname === "/";

	return (
		<div
			className={`w-full flex flex-col items-center ${
				!locationIsHome
					? "h-[100px] bg-light-blue relative"
					: "h-[300px] bg-gradient-to-t from-bright-blue via-light-blue to-white absolute"
			} `}
		>
			<div className="items-center">
				<img className="h-24" src="/logo/fef-logo.png" alt="fef intel" />
			</div>
			<div className="flex space-x-1">
				<div className="h-12 w-12 rounded-full bg-white flex justify-center items-center">
					<InstagramLogo />
				</div>
				<div className="h-12 w-12 rounded-full bg-white flex justify-center items-center">
					<FacebookLogo />
				</div>
				<div className="h-12 w-12 rounded-full bg-white flex justify-center items-center">
					<LineLogo />
				</div>
				<div className="h-12 w-12 rounded-full bg-white flex justify-center items-center">
					<GmailLogo />
				</div>
			</div>
		</div>
	);
};

export default Footer;
