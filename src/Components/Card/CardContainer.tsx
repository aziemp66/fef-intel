import React from "react";

type CardContainerProps = {
	competition: "Scrabble" | "Speech" | "Debate" | "Newscasting";
};
type CardColorType = string;

const CardContainer = ({ competition }: CardContainerProps) => {
	let cardColor: CardColorType;
	switch (competition) {
		case "Scrabble":
			cardColor = "bg-light-yellow";
			break;
		case "Speech":
			cardColor = "bg-light-blue";
			break;
		case "Debate":
			cardColor = "bg-light-green";
			break;
		case "Newscasting":
			cardColor = "bg-light-red";
			break;
		default:
			cardColor = "bg-light-yellow";
			break;
	}

	const cardBrightColor = cardColor.replace("light", "bright");
	return (
		<div
			className={`flex flex-col cursor-pointer items-center justify-between ${cardColor} rounded-xl p-12 gap-4 hover:${cardBrightColor} transition-all duration-300`}
		>
			<div className="flex justify-center items-center h-3/4">
				<img
					src={`/hero/${competition}.png`}
					alt={competition}
					width={300}
					height={300}
				/>
			</div>

			<p className="font-medium text-5xl">{competition}</p>
		</div>
	);
};

export default CardContainer;
