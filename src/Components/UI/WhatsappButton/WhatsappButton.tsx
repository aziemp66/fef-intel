const WhatsappButton = (props: { className?: string; contact: string }) => {
	return (
		<a
			href={`https://wa.me/${props.contact}`}
			className={`${props?.className} block bg-green-400 rounded-full w-full h-full`}
		>
			<img
				className="w-full h-full"
				src="/items/whatsapp.svg"
				alt="whatsapp-icon"
			/>
		</a>
	);
};

export default WhatsappButton;
