
const Project = ({ data }) => {

    const hrefValue = data.url ? data.url : data.github;
    const linkValue = data.url ? 'Visitar proyecto' : 'Ver en github';

    return (
        <article>
            <img width={40} height={40} src={data.image} alt={data.title} />
            <h4>{data.title}</h4>
            <p>{data.text}</p>
            <div>
                <a href={hrefValue}>{linkValue}</a>
                <span>{data.year}</span>
            </div>
        </article>
    )
}

export default Project