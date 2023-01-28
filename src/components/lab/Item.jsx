
const Item = ({ data }) => {
    const hrefValue = data.url ? data.url : data.github;
    const linkValue = data.url ? 'Visitar proyecto' : 'Ver en github';

    return (
        <article>
            <img width={40} height={40} src={data.image} alt={data.title} />
            <h4>{data.title}</h4>
            <p>{data.text}</p>
            <a href={hrefValue}>{linkValue}</a>
            {data.state && <span>Incompleto</span>}
        </article>
    )
}

export default Item