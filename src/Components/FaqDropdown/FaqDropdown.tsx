import { useState } from "react";
import { ReactComponent as ChevronDown } from "../../Assets/Icons/chevronDown.svg";
import { ReactComponent as ChevronUp } from "../../Assets/Icons/chevronUp.svg";

const faqDropdown = (props: {
	question: string;
	answer: string;
	color: string;
}) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div
			className="px-8 py-12 rounded-lg shadow-2xl"
			style={{
				backgroundColor: props.color,
			}}
		>
			<button
				className="w-full flex justify-between"
				onClick={() => {
					setOpen(!open);
				}}
			>
				<p className="font-bold text-left">{props.question}</p>
				<div className="w-8">
					{open ? (
						<ChevronUp fill="#686868" />
					) : (
						<ChevronDown stroke="#686868" />
					)}
				</div>
			</button>

			{open && <p className="mt-4 text-left">{props.answer}</p>}
		</div>
	);
};

export default faqDropdown;
