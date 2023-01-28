import { useState } from "react";
import "./experience.scss";

const data = require("../../data/experience.json");

const Experience = () => {

    const [currentOption, setCurrentOption] = useState(0);

    const ifCurrent = (option) => {
        if (currentOption === option) return "active"
        return ""
    }

    const divActiveStyle = { transform: `translateX(${currentOption}00%)` }

    return (
        <section id="experiencia">
            <h2>Experiencia práctica</h2>
            <div className="years">
                <div style={divActiveStyle} className="active"></div>
                <span className={ifCurrent(0)} onClick={()=> setCurrentOption(0)}>2020</span>
                <span className={ifCurrent(1)} onClick={()=> setCurrentOption(1)}>2021</span>
                <span className={ifCurrent(2)} onClick={()=> setCurrentOption(2)}>2022</span>
                <span className={ifCurrent(3)} onClick={()=> setCurrentOption(3)}>2023</span>
            </div>
            <h3>{data.years[currentOption].title}</h3>
            <div className="tech">
                {data.years[currentOption].learn.map((tech, index) => {
                    if (index !== data.years[currentOption].learn.length - 1) return <span key={tech}>{tech} - </span>
                    return <span key={tech}>{tech}</span> 
                })}
            </div>
            <p>{data.years[currentOption].text}</p>
        </section>
    )
}

export default Experience