import "./desktop.scss";

const Option = ({toSection, name, image})=> {
	const onClickHandler = ()=> {
		window.scroll({ top: document.getElementById(toSection).offsetTop - 99, behavior: 'smooth' })
	}
	if (!image) return <span onClick={onClickHandler}>{name}</span>
    return <img onClick={onClickHandler} width={22} height={22} src={image} alt={name}/>
}

const NavbarDesktop = () => {
    return (
        <nav className="desktop">
            <h2>FRAN<b>{'{'}</b>O<b>{'}'}</b></h2>
            <div className="separator"></div>
            <div className="options">
                <Option toSection='inicio' name='Inicio'/>
				<Option toSection='quiensoy' name='Quien soy'/>
				<Option toSection='experiencia' name='Experiencia'/>
				<Option toSection='proyectos' name='Proyectos'/>
				<Option toSection='laboratorio' name='Laboratorio'/>
				<Option toSection='conocimientos' name='Conocimientos'/>
				<Option image='/assets/navbar/contact.svg' toSection='contacto' name='Contacto'/>
            </div>
        </nav>
    )
}

export default NavbarDesktop