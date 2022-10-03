import { useLocation } from "react-router-dom";
import { ReactComponent as TiktokLogo } from "../../../Assets/Icons/tiktok.svg";
import { ReactComponent as InstagramLogo } from "../../../Assets/Icons/instagram.svg";
import { ReactComponent as YoutubeLogo } from "../../../Assets/Icons/youtube.svg";
import { ReactComponent as FacebookLogo } from "../../../Assets/Icons/facebook.svg";
import { ReactComponent as LineLogo } from "../../../Assets/Icons/line.svg";
import { ReactComponent as GmailLogo } from "../../../Assets/Icons/gmail.svg";
//https://bit.ly/FasilkomEnglishFestival2022
const Footer = () => {
	const location = useLocation();
	const locationIsHome = location.pathname === "/";

	return (
		<div
			className={`w-full flex flex-col items-center space-y-4 ${
				!locationIsHome
					? "h-[300px] bg-light-blue relative"
					: "h-[300px] bg-gradient-to-t from-bright-blue via-light-blue to-white absolute"
			} `}
		>
			<div className="items-center">
				<img className="h-24" src="/logo/fef-logo.png" alt="fef intel" />
			</div>
			<div className="flex space-x-1">
				<a
					href="https://www.tiktok.com/@intelunsri"
					className="h-12 w-12 rounded-full bg-white flex justify-center items-center shadow-lg"
				>
					<TiktokLogo />
				</a>
				<a
					href="https://instagram.com/intelunsri"
					className="h-12 w-12 rounded-full bg-white flex justify-center items-center shadow-lg"
				>
					<InstagramLogo />
				</a>
				<a
					href="https://youtube.com/channel/UC0yrlHgt0vmko9aYwhCvPkQ"
					className="h-12 w-12 rounded-full bg-white flex justify-center items-center shadow-lg"
				>
					<YoutubeLogo />
				</a>
				<a
					href="https://www.facebook.com/intelunsri"
					className="h-12 w-12 rounded-full bg-white flex justify-center items-center shadow-lg"
				>
					<FacebookLogo />
				</a>
				<a
					href="http://line.me/ti/p/@548kgjbz"
					className="h-12 w-12 rounded-full bg-white flex justify-center items-center shadow-lg"
				>
					<LineLogo />
				</a>
				<a
					// https://stackoverflow.com/a/68000520/13673444
					href="https://mail.google.com/mail/?view=cm&fs=1&to=intelunsri@gmail.com&su=FEF INTEL&body=Hello, I'm {name} from {institution}. I wanted to ask something about the fef event."
					className="h-12 w-12 rounded-full bg-white flex justify-center items-center shadow-lg"
				>
					<GmailLogo />
				</a>
			</div>
			<div className="text-center">
				<p>
					Info | Contact Us | Support | Terms of Service | Privacy Policy |
					Licenses
				</p>
				<p>@Copyright INTEL 2022</p>
			</div>
		</div>
	);
};

export default Footer;
