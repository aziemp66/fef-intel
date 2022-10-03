import React from "react";

const About = () => {
	return (
		<div className="my-24 ">
			<div className="mb-8">
				<h2 className="text-3xl md:text-6xl font-bold text-center">
					FEF INTEL UNSRI 2022
				</h2>
			</div>
			<div className="flex flex-col justify-center items-center mb-8">
				<div className="md:w-4/5 w-[90%] bg-light-yellow md:h-24 h-12 rounded-t-xl shadow-inner-lg flex items-center gap-4 px-12 ">
					<div className="w-6 h-6 rounded-full shadow-inner-lg bg-bright-blue"></div>
					<div className="w-6 h-6 rounded-full shadow-inner-lg bg-bright-green"></div>
					<div className="w-6 h-6 rounded-full shadow-inner-lg bg-bright-red"></div>
				</div>
				<iframe
					className="md:w-4/5 w-[90%] h-[300px] md:h-[650px] shadow-inner-lg cursor-pointer"
					src="https://www.youtube.com/embed/jhRoM2j4DIU"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
			<div className="md:w-4/5 w-[90%] mx-auto flex flex-col gap-4">
				<p className="text-justify">
					Language is something that we must speak as a means of communication,
					where both parties must understand what the other party is saying. In
					today's era of globalization, mastery of foreign languages is
					important to support the success of one's life and career. Along with
					the increasingly fierce competition today, educators demand students
					as the nation's next generation to improve their abilities and develop
					their creativity, especially in English language skills. Because as we
					know English is an international language and we need to improve our
					language skills further because most of the information in this modern
					era is in English.
				</p>
				<p className="text-justify">
					In general, Indonesian people are very less proficient in English as
					an international language. The lack of student interest in learning
					English makes it more difficult for Indonesian people to face the
					current era of globalization. Therefore, Ilkom's Community of English
					Lovers (INTEL) as an organization with a mission to develop
					intellectual abilities in the field of language intends to participate
					in improving the abilities of the younger generation and try to
					develop their creativity in the field of language, especially English.
				</p>
				<p className="text-justify">
					Therefore, INTEL (Community for English Language Lovers Ilkom) will
					hold the 2022 Fasilkom English Festival. Through this activity, it is
					hoped that the participants can improve their English skills and can
					become a forum for students as the younger generation to show their
					abilities and creativity in the field of language, especially English
					as an international language.
				</p>
				<p className="text-justify">
					FASILKOM English Festival (FEF) is an annual event held by ILKOM’s
					Community of English Lovers (INTEL), Universitas Sriwijaya. FASILKOM
					English Festival 2021 is an English competition that opens
					internationally with the main target for all of the high school and
					college students in Indonesia and And in several other countries
					without limits. There are four competitions which will be held which
					are debate, speech, scrabble and newscast.
				</p>
			</div>
		</div>
	);
};

export default About;
