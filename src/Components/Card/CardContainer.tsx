import React from "react";

type CardContainerProps = {
	competition: "Scrabble" | "Speech" | "Debate" | "Newscasting";
};
type CardColorType = string;

const CardContainer = ({ competition }: CardContainerProps) => {
	let cardColor: CardColorType;
	switch (competition) {
		case "Scrabble":
			cardColor = "bg-light-yellow hover:bg-bright-yellow";
			break;
		case "Speech":
			cardColor = "bg-light-blue hover:bg-bright-blue";
			break;
		case "Debate":
			cardColor = "bg-light-green hover:bg-bright-green";
			break;
		case "Newscasting":
			cardColor = "bg-light-red hover:bg-bright-red";
			break;
		default:
			cardColor = "bg-light-yellow hover:bg-bright-yellow";
			break;
	}

	return (
		<div
			className={`${cardColor} flex flex-col cursor-pointer items-center justify-between rounded-xl p-12 gap-4 transition-all duration-300`}
		>
			<div className="flex justify-center items-center h-3/4">
				<img
					src={`/hero/${competition}.png`}
					alt={competition}
					width={300}
					height={300}
				/>
			</div>

			<p className="font-medium text-3xl md:text-5xl">{competition}</p>
		</div>
	);
};

export default CardContainer;
