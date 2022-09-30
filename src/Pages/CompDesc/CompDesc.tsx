import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashLineTitle from "../../Components/UI/DashLineTitle/DashLineTitle";
import Timeline from "../../Components/Timeline/Timeline";
import WhatsappCard from "../../Components/WhatsappCard/WhatsappCard";

const CompDesc = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const parts = location.pathname.split("/");
	const lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash
	const name = lastSegment!.charAt(0).toUpperCase() + lastSegment!.slice(1);

	let description;
	let color;
	let items: { name: string; active: boolean }[];
	switch (name) {
		case "Debate":
			description =
				"debate Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam!";
			color = "#97C9D2";
			items = [
				{
					name: "Step 1",
					active: true,
				},
				{
					name: "Step 2",
					active: true,
				},
				{
					name: "Step 3",
					active: true,
				},
				{
					name: "Step 4",
					active: false,
				},
			];
			break;
		case "Newscasting":
			description =
				"newscasting Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam!";
			color = "#EFACA6";
			items = [
				{
					name: "Step 1",
					active: true,
				},
				{
					name: "Step 2",
					active: true,
				},
				{
					name: "Step 3",
					active: true,
				},
				{
					name: "Step 4",
					active: false,
				},
			];
			break;
		case "Scrabble":
			description =
				"Scrabble Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam!";
			color = "#FBEBBA";
			items = [
				{
					name: "Step 1",
					active: true,
				},
				{
					name: "Step 2",
					active: true,
				},
				{
					name: "Step 3",
					active: true,
				},
				{
					name: "Step 4",
					active: false,
				},
			];
			break;
		case "Speech":
			description =
				"Speech Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam!";
			color = "#C8E3B8";
			items = [
				{
					name: "Step 1",
					active: true,
				},
				{
					name: "Step 2",
					active: true,
				},
				{
					name: "Step 3",
					active: true,
				},
				{
					name: "Step 4",
					active: false,
				},
			];
			break;
		default:
	}

	useEffect(() => {
		if (!["Debate", "Newscasting", "Scrabble", "Speech"].includes(name)) {
			navigate("/404");
		}
	}, []);

	return (
		<div>
			<DashLineTitle color="#FFD658" text="Competition Name" />
			<div className="my-40 lg:mx-8 mx-4 lg:h-[325px] flex flex-col items-center lg:flex-row lg:gap-8 lg:justify-center">
				<img src={`/hero/${name}.png`} alt="" />
				<div className="max-w-[800px] lg:h-full flex flex-col content-between justify-between">
					<div>
						<p className="font-bold text-2xl">{name}</p>
						<p>{description}</p>
					</div>
					<button
						className="w-full text-center rounded-lg shadow-lg"
						style={{
							backgroundColor: color,
						}}
					>
						<p className="py-4 font-xl text-white text-center font-bold ">
							Download Guidebook
						</p>
					</button>
				</div>
			</div>
			<DashLineTitle color="#E9685C" text="Timeline" />
			<div className="my-40">
				<Timeline items={items!} />
			</div>
			<DashLineTitle color="#95AB87" text="Contact Person" />
			<div className="my-20 flex flex-col mx-10 space-y-4 md:space-y-0 md:space-x-10 md:flex-row align-center justify-center">
				<WhatsappCard name="Aldrin Tivano" number="0821-XXXX-XXX" />
				<WhatsappCard name="Septa Rahmayuni" number="0821-XXXX-XXX" />
			</div>
		</div>
	);
};

export default CompDesc;
