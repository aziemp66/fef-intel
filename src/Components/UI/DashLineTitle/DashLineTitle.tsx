import styles from "../../../Styles/DashLineTitle.module.css";

const dashLineTitle = ({
	className,
	color,
	text,
}: {
	className?: string;
	color?: string;
	text: string;
}) => {
	return (
		<div className={`relative w-full ${className}`}>
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

export default dashLineTitle;
