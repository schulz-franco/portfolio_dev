import "./home.scss";

const Home = () => {
    return (
        <section id="inicio">
            <h2>Developer <span>Full-Stack</span></h2>
            <h3>Diseño, front-end y back-end con <span>+3 años</span> de experiencia práctica.</h3>
            <button onClick={()=> window.scroll({ top: document.getElementById("contacto").offsetTop - 80, behavior: 'smooth' })} >Contactar</button>
            <span className="image">{'}'}</span>
        </section>
    )
}

export default Home