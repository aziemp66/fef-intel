import DashLineTitle from "../../Components/UI/DashLineTitle/DashLineTitle";
import FaqDropdown from "../../Components/FaqDropdown/FaqDropdown";

const Faq = () => {
	const faqs = [
		[
			"Is the competition open for Highschool students?",
			"Yes! this competition is also available for Highschool students, so register yourself now and try your best🤩",
		],
		[
			"Is it possible if one person participates in 2 competitions?",
			"1 participant can join in 2 competitions if they’re capable",
		],
		[
			"What’s the theme for each competition?",
			"Since our main theme is about Health, so the specific same with",
		],
		[
			"What’s the procedure for joining the competition?",
			"Go to our google form link bit.ly/FasilkomEnglishFestival2022  and register. After that complete the payment",
		],
		[
			"If I'm not from Indonesia but want to join, how about the payment?",
			"No worries, you can use Paypal as well!",
		],
		[
			"Is this competition open to everyone not only from Indonesia?",
			"Absolutely😉",
		],
		[
			"What’s parliament will be used for the debate competition?",
			"The parliament will be using British",
		],
		[
			"How’s the procedure for the Scrabble competition?",
			"Scrabble competition will be held using Zoom and will use an application chosen by the host. ",
		],
		[
			"When does the competition start?",
			"The competition starts on 6 november until 15",
		],
		[
			"Where can we submit the video?",
			"Videos can be submitted on the registration website",
		],
		[
			"How do I register to be a participant?",
			"You can register at this link!!Come and join us🤩🥳 (https://bit.ly/FasilkomEnglishFestival2022)",
		],
	];
	return (
		<div className="text-center">
			<DashLineTitle className="mb-4" color="yellow" text="FAQ" />
			<p className="text-lg">
				Have you can find frequently asked questions. We help you to find the
				answer!
			</p>
			<div className="items-center my-8 mx-4 space-y-16">
				{faqs.map((faq, index) => {
					if (index % 2 == 0) {
						return (
							<FaqDropdown color="#C8E3B8" question={faq[0]} answer={faq[1]} />
						);
					} else {
						return (
							<FaqDropdown color="#FBEBBA" question={faq[0]} answer={faq[1]} />
						);
					}
				})}
			</div>
		</div>
	);
};

export default Faq;
