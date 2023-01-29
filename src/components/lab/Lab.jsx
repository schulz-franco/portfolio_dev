import Item from "./Item";
import "./lab.scss";

const { data } = require("../../data/lab");

const Lab = () => {
    return (
        <section id="laboratorio">
            <h2>Laboratorio</h2>
            {data.map((item) => { return <Item key={item.url ? item.url : item.github} data={item} /> })}
        </section>
    )
}

export default Lab