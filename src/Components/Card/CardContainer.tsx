import React from "react";

type CardContainerProps = {
	color: "red" | "blue" | "green" | "yellow";
} & React.HTMLAttributes<HTMLDivElement>;

const CardContainer = ({ color, ...rest }: CardContainerProps) => {
	return <div {...rest}>CardContainer</div>;
};

export default CardContainer;
