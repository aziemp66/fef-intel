import WhatsappButton from "../UI/WhatsappButton/WhatsappButton";

const WhatsappCard = (props: { name: string; number: string }) => {
	return (
		<div className="flex justify-start gap-4 rounded-xl shadow-md py-4 sm:px-8">
			<WhatsappButton className="w-14 h-14" contact={props.number} />
			<div>
				<p className="text-lg font-bold">{props.name}</p>
				<p className="text-lg">{props.number}</p>
			</div>
		</div>
	);
};

export default WhatsappCard;
