import React from 'react';
import Switch from 'react-switch';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Creations from './pages/Creations';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
// import Not_found from './pages/Not_found';

// var Container = React.createClass({
// 	render: function () {
// 		return <div>
// 			<Home />
// 			<Contact />
// 			<Creations />
// 			<About />
// 		</div>;
// 	}
// });

const App = () => {

	return (
		<div className="App">
			<div id="content">
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/creations" element={<Creations/>} />
					<Route path="/about" element={<About/>} />
					<Route path="/contact" element={<Contact/>} />
				</Routes>
			</div>
				<Navbar />
		</div>
	);
};

{/* <Routes>
	<Route path="/" exact element={<Home/>} />
	<Route path="/about" element={<About/>} />
	<Route path="/creations" element={<Creations/>} />
	<Route path="/contact" element={<Contact/>} />
	<Route path="/error" element={<Not_found/>} />
</Routes> */}

export default App;