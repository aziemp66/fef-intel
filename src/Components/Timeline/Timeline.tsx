import "./Timeline.css";

const Timeline = (props: { items: { name: string; active: boolean }[] }) => {
	const { items } = props;
	const totalItems = items.length;
	const numberOfActiveItems = items.filter((item) => item.active).length;
	const progressBarWidth =
		totalItems > 1 ? ((numberOfActiveItems - 1) / (totalItems - 1)) * 100 : 0;

	return (
		<div className="timeline">
			<div
				className="timeline-progress"
				style={{ width: `${progressBarWidth}%` }}
			></div>
			<div className="timeline-items">
				{items.map((item, i) =>
					i % 2 === 1 ? (
						<div
							key={i}
							className={"timeline-item" + (item.active ? " active" : "")}
						>
							<div className="timeline-content">{item.name}</div>
						</div>
					) : (
						<div
							key={i}
							className={"timeline-item" + (item.active ? " active" : "")}
						>
							<div className="timeline-content-even">{item.name}</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Timeline;
