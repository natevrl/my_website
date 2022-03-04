import React from 'react';
import Switch from 'react-switch';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import All from './pages/creations/All';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Not_found from './pages/Not_found';
import C from './pages/creations/C';
import Ctf from './pages/creations/Ctf';
import Linux from './pages/creations/Linux';
import Reactjs from './pages/creations/Reactjs';
import Cpp from './pages/creations/Cpp';

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
			{/* <div id="content"> */}
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/creations" element={<All/>}/> 
					<Route path="/creations/c" element={<C/>}/> 
					<Route path="/creations/cpp" element={<Cpp/>}/> 
					<Route path="/creations/reactjs" element={<Reactjs/>}/> 
					<Route path="/creations/ctf" element={<Ctf/>}/> 
					<Route path="/creations/linux" element={<Linux/>}/> 
					<Route path="/about" element={<About/>} />
					<Route path="/contact" element={<Contact/>} />
					<Route path="*" element={<Not_found/>} />
				</Routes>
			{/* </div> */}
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