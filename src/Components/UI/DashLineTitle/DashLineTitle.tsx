import styles from "../../../Styles/DashLineTitle.module.css";

const Footer = ({ color, text }: { color?: string; text: string }) => {
	return (
		<div className="relative w-full my-16">
			<h2 className={`text ${styles.text} font-normal text-3xl md:text-5xl`}>
				<span>{text}</span>
			</h2>
			<div
				className={styles.dash}
				style={{
					borderColor: color,
				}}
			></div>
		</div>
	);
};

export default Footer;
