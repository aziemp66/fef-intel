import styles from "./DashLineTitle.module.css";

const Footer = (props: { color?: string; text: string }) => {
	return (
		<>
			<div className="relative w-full mt-44 gap-4">
				<h2 className={`text ${styles.text} font-normal text-5xl`}>
					<span>{props.text}</span>
				</h2>
				<div
					className={styles.dash}
					style={{
						borderColor: props.color,
					}}
				></div>
			</div>
		</>
	);
};

export default Footer;
