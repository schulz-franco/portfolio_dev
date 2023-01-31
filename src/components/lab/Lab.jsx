import Item from "./Item";
import "./lab.scss";

const { projects } = require("../../data/lab.json");

const Lab = () => {
    return (
        <section id="laboratorio">
            <h2>Laboratorio</h2>
            {projects.map((item) => { return <Item key={item.url ? item.url : item.github} data={item} /> })}
        </section>
    )
}

export default Lab