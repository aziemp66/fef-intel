const WhatsappButton = (props: { className?: string }) => {
	return (
		<a
			href="http://www.google.com"
			className={`${props?.className} block bg-green-400 rounded-full h-[75px] w-[75px]`}
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
