import "./card.scss";

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
                    <a href={data.instagram}><img width={26} height={26} src="/assets/social/instagram.png" alt="Instagram"/></a>
                    <a href={data.linkedin}><img width={26} height={26} src="/assets/social/linkedin.png" alt="Linkedin"/></a>
                    <a href={data.github}><img width={26} height={26} src="/assets/social/github.png" alt="Github"/></a>
                    <a href={data.whatsapp}><img width={26} height={26} src="/assets/social/whatsapp.png" alt="Whatsapp"/></a>
                </div>
            </article>
        </section>
    )
}

export default Card