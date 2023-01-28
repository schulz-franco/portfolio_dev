import Project from "./Project";
import "./projects.scss";

const data = require("../../data/projects.json");

const Projects = () => {
    return (
        <section id="proyectos">
            <h2>Proyectos</h2>
            <div className="container">
                {data.projects.map(project => { return <Project key={project.url ? project.url : project.github} data={project} /> })}
                <a className="github" href="#inicio">Repositorios de Github</a>
            </div>
        </section>
    )
}

export default Projects