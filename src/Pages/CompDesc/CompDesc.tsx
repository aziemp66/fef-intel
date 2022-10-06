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
	let guidebookLink;
	let cp1: { name: string; number: string };
	let cp2: { name: string; number: string };
	let items: { name: string; active: boolean; date: string }[];
	switch (name) {
		case "Debate":
			description =
				"Debate Competition FEF 2022 is open to all students of varsity in Indonesia. Especially, we also would like to invite students of varsities from Malaysia to join and compete with us. In a debate competition, arguments are put forward for often opposing viewpoints. In debates, we emphasize logical consistency, factual accuracy, and emotional appeal to an audience.";
			color = "#97C9D2";
			guidebookLink =
				"https://drive.google.com/file/d/1CCrjEqfHXifYIkD83DeeRta_neqO1mu_/view?usp=drivesdk";
			items = [
				{
					name: "Registration",
					active: true,
					date: "October, 1st 2022 - November, 1st 2022",
				},
				{
					name: "Preliminary round",
					active: false,
					date: "November, 7th - 8th 2022",
				},
				{
					name: "Semi Final Announcement",
					active: false,
					date: "November, 8th 2022",
				},
				{
					name: "Semi Final Round and Final Announcement",
					active: false,
					date: "November, 9th 2022",
				},
				{
					name: "Final Round and Winner Announcement",
					active: false,
					date: "November, 15th 2022",
				},
			];
			cp1 = {
				name: "Shofi",
				number: "6282176589348",
			};
			cp2 = {
				name: "Rifki",
				number: "6288268259644",
			};
			break;
		case "Newscasting":
			description =
				"In this Newscasting competition, participants will deliver the News as a professional anchor on television within a specific time based on the round. This year, the FEF 2022 Newscasting Competition is open to all students at the university. The assessment criteria for this competition are performance (self-presentation, self-confidence, clothing, expression, and movement), material (material, intonation, tempo, time), and English Language Skills (vocabulary, grammar, pronunciation, fluency).";
			color = "#EFACA6";
			guidebookLink =
				"https://drive.google.com/file/d/1C3WaHGF6-Qc-tVPhGkrjN5TJnVCzQCUo/view?usp=drivesdk";
			items = [
				{
					name: "Registration",
					active: true,
					date: "October, 1st 2022 - November, 1st 2022",
				},
				{
					name: "Submit Video for Preliminary Round",
					active: false,
					date: "November, 1st - 5th 2022",
				},
				{
					name: "Scoring by Judges",
					active: false,
					date: "November, 6th - 8th 2022",
				},
				{
					name: "Semi Final Announcement",
					active: false,
					date: "November, 8th 2022",
				},
				{
					name: "Semi Final Round and Final Announcement",
					active: false,
					date: "November, 9th 2022",
				},
				{
					name: "Final Round and Winner Announcement",
					active: false,
					date: "November, 15th 2022",
				},
			];
			cp1 = {
				name: "Idris",
				number: "6281366209062",
			};
			cp2 = {
				name: "Saci",
				number: "6281929432762",
			};
			break;
		case "Scrabble":
			description =
				"Scrabble Competition FEF 2022 is open to all students at the university. Especially, this year we would invite students of varsities from Malaysia to participate in FEF 2022. In this Scrabble competition, participants will play scrabble against other participants in a 1v1 game using an application. The scoring will automatically be generated by the application. ";
			color = "#FBEBBA";
			guidebookLink =
				"https://docs.google.com/document/d/18n90JPd7q-YJ_5ACpP6mv8nQtrZdQ3ft/edit?usp=drivesdk&ouid=116983114766667284647&rtpof=true&sd=true";
			items = [
				{
					name: "Registration",
					active: true,
					date: "October, 1st 2022 - November, 1st 2022",
				},
				{
					name: "Preliminary round",
					active: false,
					date: "November, 7th - 8th 2022",
				},
				{
					name: "Semi Final Announcement",
					active: false,
					date: "November, 8th 2022",
				},
				{
					name: "Semi Final Round and Final Announcement",
					active: false,
					date: "November, 9th 2022",
				},
				{
					name: "Final Round and Winner Announcement",
					active: false,
					date: "November, 15th 2022",
				},
			];
			cp1 = {
				name: "Divo",
				number: "6283177725999",
			};
			cp2 = {
				name: "Dila",
				number: "6287889822366",
			};
			break;
		case "Speech":
			description =
				"Speech Competition FEF 2022 is open to all students at the university. Especially, this year we would invite students of varsities from Malaysia to participate in FEF 2022. In this Speech competition, participants will be delivering their own written speech, based on selected themes the committee gave. The scoring criteria of this competition are speech content, performance, and English ability of participants.";
			color = "#C8E3B8";
			guidebookLink =
				"https://docs.google.com/document/d/1-QUj0KOAXZ5ptGknpwg60h-RenaSNRg2/edit?usp=drivesdk&ouid=116983114766667284647&rtpof=true&sd=true";
			items = [
				{
					name: "Registration",
					active: true,
					date: "October, 1st 2022 - November, 1st 2022",
				},
				{
					name: "Submit Video for Preliminary Round",
					active: false,
					date: "November, 1st - 5th 2022",
				},
				{
					name: "Scoring by Judges",
					active: false,
					date: "November, 6th - 8th 2022",
				},
				{
					name: "Semi Final Announcement",
					active: false,
					date: "November, 8th 2022	",
				},
				{
					name: "Semi Final Round and Final Announcement",
					active: false,
					date: "November, 9th 2022	",
				},
				{
					name: "Final Round and Winner Announcement",
					active: false,
					date: "November, 15th 2022",
				},
			];
			cp1 = {
				name: "Dinda",
				number: "6285669806505",
			};
			cp2 = {
				name: "Sarah",
				number: "6281278983795",
			};
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
			<DashLineTitle color="#FFD658" text={name + " Competition"} />
			<div className="my-40 lg:mx-8 mx-4 lg:h-[325px] flex flex-col items-center lg:flex-row lg:gap-8 lg:justify-center">
				<img src={`/hero/${name}.png`} alt="" />
				<div className="max-w-[800px] lg:h-full flex flex-col content-between justify-between">
					<div>
						<p className="font-bold text-2xl">{name}</p>
						<p>{description}</p>
					</div>
					<a
						href={guidebookLink}
						className="w-full text-center rounded-lg shadow-lg"
						style={{
							backgroundColor: color,
						}}
					>
						<p className="py-4 font-xl text-white text-center font-bold">
							Download Guidebook
						</p>
					</a>
				</div>
			</div>
			<DashLineTitle color="#E9685C" text="Timeline" />
			<div className="my-20">
				<div className="overflow-x-scroll md:overflow-x-hidden">
					<Timeline items={items!} />
				</div>
				<table className="mx-auto table-auto [&>*>*]:border">
					<thead>
						<tr>
							<th>Time</th>
							<th>Event</th>
						</tr>
					</thead>
					{items!.map((item) => (
						<tr>
							<td className="pr-4">{item.date}</td>
							<td>{item.name}</td>
						</tr>
					))}
				</table>
			</div>
			<DashLineTitle color="#95AB87" text="Contact Person" />
			<div className="my-20 flex flex-col mx-1 sm:mx-10 space-y-4 md:space-y-0 md:space-x-10 md:flex-row align-center justify-center">
				<WhatsappCard name={cp1!.name} number={cp1!.number} />
				<WhatsappCard name={cp2!.name} number={cp2!.number} />
			</div>
		</div>
	);
};

export default CompDesc;
