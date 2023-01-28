import Card from "./components/card/Card";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import Lab from "./components/lab/Lab";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
    return (
		<div className="App">
			<Navbar />
			<Home />
			<Card />
			<Experience />
			<Projects />
			<Lab />
	    </div>
    );
}

export default App;
