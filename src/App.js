import Card from "./components/card/Card";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
		<div className="App">
			<Navbar />
			<Home />
			<Card />
			<Experience />
	    </div>
    );
}

export default App;
