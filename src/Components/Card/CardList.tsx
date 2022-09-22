import React from "react";
import CardContainer from "./CardContainer";

const CardList = () => {
	return (
		<div className="mx-auto grid grid-cols-2 grid-rows-2 w-[65%] py-40 gap-24">
			<CardContainer competition="Debate" />
			<CardContainer competition="Speech" />
			<CardContainer competition="Scrabble" />
			<CardContainer competition="Newscasting" />
		</div>
	);
};

export default CardList;
