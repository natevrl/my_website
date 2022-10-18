import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Projects, C, Cpp, Reactjs, Linux, html_css } from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Not_found from "./pages/Not_found";
import Footer from "./components/Footer";
import DeckHandler from "./components/DeckHandler";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects/" element={<Projects />}>
					<Route path="/projects/all" element={<DeckHandler tag="All" />} />
					<Route path="/projects/c" element={<DeckHandler tag="C" />} />
					<Route path="/projects/unix-bash" element={<DeckHandler tag="Unix/Bash" />} />
					<Route
						path="/projects/web"
						element={<DeckHandler tag="Web" />}
					/>
				</Route>
				<Route path="/about_me" element={<AboutMe />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Not_found />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
