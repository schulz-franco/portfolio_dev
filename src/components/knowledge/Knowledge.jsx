import "./knowledge.scss";
import htmlImg from "../../assets/technologies/html.png";
import cssImg from "../../assets/technologies/css.png";
import sassImg from "../../assets/technologies/sass.png";
import jsImg from "../../assets/technologies/js.png";
import reactImg from "../../assets/technologies/react.png";
import nodeImg from "../../assets/technologies/node.png";
import pythonImg from "../../assets/technologies/python.png";
import gitImg from "../../assets/technologies/git.png";
import sqlImg from "../../assets/technologies/sql.png";
import mongoImg from "../../assets/technologies/mongo.png";
import nextImg from "../../assets/technologies/next.svg";

const Knowledge = () => {
    return (
        <section id="conocimientos">
            <h2>Tecnologías</h2>
            <div className="container">
                <div><img width={40} height={40} src={htmlImg} alt="HTML" /></div>
                <div><img width={38} height={38} src={cssImg} alt="CSS" /></div>
                <div><img width={40} height={40} src={sassImg} alt="SASS" /></div>
                <div><img width={36} height={36} src={jsImg} alt="Javascript" /></div>
                <div><img width={40} height={40} src={reactImg} alt="React" /></div>
                <div><img width={50} height={50} src={nodeImg} alt="NodeJS" /></div>
                <div><img width={50} height={50} src={pythonImg} alt="Python" /></div>
                <div><img width={40} height={40} src={gitImg} alt="Git" /></div>
                <div><img width={40} height={40} src={sqlImg} alt="SQL" /></div>
                <div><img width={40} height={40} src={mongoImg} alt="MongoDB" /></div>
                <div><img width={46} height={46} src={nextImg} alt="NextJS" /></div>
            </div>
        </section>
    )
}

export default Knowledge