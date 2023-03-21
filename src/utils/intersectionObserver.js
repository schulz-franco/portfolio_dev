
const show = (elements, observer)=> {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add("observerShow")
        }
    });
}

const observer = new IntersectionObserver(show, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2
})

export const observerAll = ()=> {
    const card = document.querySelector("#experiencia")
    observer.observe(card)

    const experience = document.querySelector("#quiensoy > article")
    observer.observe(experience)

    const projects = document.querySelectorAll("#proyectos > div > article")
    projects.forEach(node => {
        observer.observe(node)
    })

    const labProjects = document.querySelectorAll("#laboratorio > article")
    labProjects.forEach(node => {
        observer.observe(node)
    })

    const knowledgeItems = document.querySelectorAll("#conocimientos > div > div")
    knowledgeItems.forEach(node => {
        observer.observe(node)
    })
}