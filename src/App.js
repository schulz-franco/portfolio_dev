import Card from "./components/card/Card";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Knowledge from "./components/knowledge/Knowledge";
import Lab from "./components/lab/Lab";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
    return (
		<div>
			<Navbar />
			<Home />
			<Card />
			<Experience />
			<Projects />
			<Lab />
			<Knowledge />
			<Contact />
			<Footer />
	    </div>
    );
}

export default App;
