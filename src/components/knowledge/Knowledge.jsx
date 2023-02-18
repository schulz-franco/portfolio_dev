import { useState } from "react";
import "./knowledge.scss";

const { technologies } = require("../../data/knowledge.json");

const Knowledge = () => {

    const [moreInfo, setMoreInfo] = useState("");
    const [focus, setFocus] = useState(-1);

    const onClickHandler = (index, text)=> {
        setMoreInfo(text);
        setFocus(index !== focus ? index : -1);
    }

    const isFocus = focus !== -1;
    const currentStyle = { borderColor: "#FF3A5E" };

    return (
        <section id="conocimientos">
            <h2>Conocimientos</h2>
            {!isFocus && <p>Toca en alguna de las tecnologías para ver más información al respecto.</p>}
            {isFocus && <p className="info">{moreInfo}</p>}
            <div className="container">
                {technologies.map((tech, index) => {
                    return <div style={focus === index ? currentStyle : {}} onClick={()=> onClickHandler(index, tech.text)} key={tech.name}><img width={tech.size ? tech.size : 40} height={tech.size ? tech.size : 40} src={tech.src} alt={tech.name} /></div>
                })}
            </div>
        </section>
    )
}

export default Knowledge