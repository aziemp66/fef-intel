import Footer from "./Components/UI/Footer/Footer";
import Header from "./Components/UI/Header/Header";
import WhatsappButton from "./Components/UI/WhatsappButton/WhatsappButton";
import Router from "./Router/Router";

function App() {
	return (
		<div className="w-full h-full font-poppins">
			<Header />
			<Router />
			<WhatsappButton
				contact="6281271467247"
				className="z-10 fixed bottom-14 right-10"
			/>
			<Footer />
		</div>
	);
}

export default App;
