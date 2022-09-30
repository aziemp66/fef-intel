const WhatsappCard = (props: { name: string; number: string }) => {
	return (
		<div className="flex justify-start gap-4 rounded-xl shadow-md py-4 px-8">
			<a
				href="http://www.google.com"
				className="block bg-green-400 rounded-full h-[75px] w-[75px]"
			>
				<img
					className="w-full h-full"
					src="/items/whatsapp.svg"
					alt="whatsapp-icon"
				/>
			</a>
			<div>
				<p className="text-lg font-bold">{props.name}</p>
				<p className="text-lg">{props.number}</p>
			</div>
		</div>
	);
};

export default WhatsappCard;
