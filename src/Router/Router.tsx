import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About/About";
import CompDesc from "../Pages/CompDesc/CompDesc";
import Competitions from "../Pages/Competitions/Competitions";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about-us" element={<About />} />
			<Route path="/faq" element={<Faq />} />
			<Route path="/competitions" element={<Competitions />} />
			<Route path="/competitions/:competition" element={<CompDesc />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default Router;
