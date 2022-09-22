import Footer from "./Components/UI/Footer";
import Header from "./Components/UI/Header";
import Router from "./Router/Router";

function App() {
	return (
		<div className="w-full h-full font-poppins">
			<Header />
			<Router />
			<Footer />
		</div>
	);
}

export default App;
