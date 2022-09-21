import styles from "./DashLineTitle.module.css";

const Footer = (props: { color?: string; text: string }) => {
	return (
		<>
			<div className="relative w-full">
				<h2 className={`text ${styles.text} font-normal text-5xl`}>
					<span>{props.text}</span>
				</h2>
				<div
					className={styles.dash}
					style={{
						borderColor: props.color == "yellow" ? "#FFD658" : "#000000",
					}}
				></div>
			</div>
		</>
	);
};

export default Footer;
