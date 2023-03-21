import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./experience.scss";

const data = require("../../data/experience.json");

const Experience = () => {

    const [currentOption, setCurrentOption] = useState(0);
    const [textItems, setTextItems] = useState([]);
    const isTablet = useMediaQuery({
        query: '(min-width: 768px)'
    })

    useEffect(()=> {
        const title = document.querySelector("h3.textTitle");
        const techs = document.querySelector("div.tech");
        const content = document.querySelector("p.textContent");
        setTextItems([title, techs, content]);
    }, [])

    const ifCurrent = (option) => {
        if (currentOption === option) return "active"
        return ""
    }

    const onClickHandler = (index)=> {
        if (currentOption !== index) {
            textItems.forEach(item => {
                item.classList.remove("show")
                setCurrentOption(index);
                setTimeout(()=> {
                    item.classList.add("show")
                }, 10)
            })
        }
    }

    const translate = isTablet ? `translateY(${currentOption}00%)` : `translateX(${currentOption}00%)`;
    const divActiveStyle = { transform: translate }

    return (
        <section id="experiencia">
            <h2>Experiencia práctica</h2>
            <div className="years">
                <div style={divActiveStyle} className="active"></div>
                {data.years.map((info, index) => {
                    return <span key={info.year} className={ifCurrent(index)} onClick={()=> onClickHandler(index)}>{info.year}</span>
                })}
            </div>
            <div className="text">
                <h3 className="textTitle show">{data.years[currentOption].title}</h3>
                <div className="tech show">
                    {data.years[currentOption].learn.map((tech, index) => {
                        if (index !== data.years[currentOption].learn.length - 1) return <span key={tech}>{tech} - </span>
                        return <span key={tech}>{tech}</span> 
                    })}
                </div>
                <p className="textContent show">{data.years[currentOption].text}</p>
            </div>
        </section>
    )
}

export default Experience