import { useEffect } from "react";
import { observerAll } from "./utils/intersectionObserver";
import Card from "./components/card/Card";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Credits from "./components/credits/Credits";
import Home from "./components/home/Home";
import Knowledge from "./components/knowledge/Knowledge";
import Lab from "./components/lab/Lab";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {

	useEffect(()=> {
		const unsub = ()=> observerAll();
		return unsub();
	}, [])

    return (
		<div>
			<Navbar />
			<Home />
			<Card />
			<Experience />
			<Projects />
			<Lab />
			<div className='row'>
				<Knowledge />
				<Contact />
			</div>
			<Credits />
			<span className="copy">Copyright © 2023 <span>Franco Schulz.</span></span>
	    </div>
    );
}

export default App;
