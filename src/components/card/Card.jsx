import "./card.scss";
import instagramImg from "../../assets/social/instagram.png";
import linkedinImg from "../../assets/social/linkedin.png";
import githubImg from "../../assets/social/github.png";
import whatsappImg from "../../assets/social/whatsapp.png";

const data = require("../../data/card.json");

const Card = () => {
    return (
        <section id="quiensoy">
            <article>
                <span>{data.nationality} - {data.age} años</span>
                <h2>{data.name}</h2>
                <h4>{data.profile}</h4>
                <p>{data.text}</p>
                <div className="social">
                    <a href={data.instagram}><img width={26} height={26} src={instagramImg} alt="Instagram"/></a>
                    <a href={data.linkedin}><img width={26} height={26} src={linkedinImg} alt="Linkedin"/></a>
                    <a href={data.github}><img width={26} height={26} src={githubImg} alt="Github"/></a>
                    <a href={data.whatsapp}><img width={26} height={26} src={whatsappImg} alt="Whatsapp"/></a>
                </div>
            </article>
        </section>
    )
}

export default Card