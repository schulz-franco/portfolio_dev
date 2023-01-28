
const Project = ({ data }) => {

    const hrefValue = data.url ? data.url : data.github;
    const linkValue = data.url ? 'Visitar proyecto' : 'Ver en github';

    return (
        <article>
            <h4>{data.title}</h4>
            <p>{data.text}</p>
            <a href={hrefValue}>{linkValue}</a>
        </article>
    )
}

export default Project