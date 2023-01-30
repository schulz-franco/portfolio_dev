import { useState } from "react";
import "./knowledge.scss";

const { data } = require("../../data/knowledge");

const Knowledge = () => {

    const [moreInfo, setMoreInfo] = useState("");
    const [focus, setFocus] = useState(-1);

    const onClickHandler = (index, text)=> {
        setMoreInfo(text);
        setFocus(index !== focus ? index : -1);
    }

    const currentStyle = { borderColor: "#FF3A5E" }
    const textStyle = focus !== -1 ? { minHeight: "90px" } : {}
    const currentText = focus !== -1 ? moreInfo : "Toca uno de los cuadros para ver más información respecto a esa tecnología."

    return (
        <section id="conocimientos">
            <h2>Conocimientos</h2>
            <p style={textStyle}>{currentText}</p>
            <div className="container">
                {data.map((tech, index) => {
                    return <div style={focus === index ? currentStyle : {}} onClick={()=> onClickHandler(index, tech.text)} key={tech.name}><img width={tech.size ? tech.size : 40} height={tech.size ? tech.size : 40} src={tech.src} alt={tech.name} /></div>
                })}
            </div>
        </section>
    )
}

export default Knowledge