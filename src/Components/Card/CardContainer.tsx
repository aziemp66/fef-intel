import React from "react";

type CardContainerProps = {
	competition: "Scrabble" | "Speech" | "Debate" | "Newscasting";
};

const CardContainer = ({ competition }: CardContainerProps) => {
	const cardColor =
		(competition === "Scrabble" && "bg-light-yellow") ||
		(competition === "Speech" && "bg-light-green") ||
		(competition === "Debate" && "bg-light-blue") ||
		(competition === "Newscasting" && "bg-light-red");
	return (
		<div
			className={`flex flex-col items-center justify-between ${cardColor} rounded-xl p-12 gap-4`}
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
