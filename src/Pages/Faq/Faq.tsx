import DashLineTitle from "../../Components/UI/DashLineTitle/DashLineTitle";
import FaqDropdown from "../../Components/FaqDropdown/FaqDropdown";

const Faq = () => {
	return (
		<div className="text-center">
			<DashLineTitle className="mb-4" color="yellow" text="FAQ" />
			<p className="text-lg">
				Have you can find frequently asked questions. We help you to find the
				answer!
			</p>
			<div className="my-8 px-40 space-y-16">
				<FaqDropdown
					color="#C8E3B8"
					question="
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatibus sunt nemo necessitatibus enim suscipit eveniet, assumenda vel. Cupiditate, quia!
          "
					answer="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa consequuntur quia quos odit sint provident officia facere ducimus ex commodi, quisquam asperiores corrupti a voluptatum atque doloremque voluptates modi esse assumenda aperiam quae non itaque saepe. Minus nisi sapiente, hic culpa, ipsam maxime iusto id fugit molestiae ratione architecto!
          "
				/>
				<FaqDropdown
					color="#FBEBBA"
					question="
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit odit perspiciatis officia!
          "
					answer="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam perspiciatis doloremque culpa nemo expedita saepe pariatur libero, eius aut et eum accusantium error molestiae provident qui quas autem quod illum laboriosam in excepturi cum.
          "
				/>
				<FaqDropdown
					color="#C8E3B8"
					question="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, libero. Molestias, libero. Voluptatibus, iste similique?
          "
					answer="
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, unde, facere quasi doloribus alias eos consequatur explicabo ipsam et reiciendis quisquam!
          "
				/>
			</div>
		</div>
	);
};

export default Faq;
