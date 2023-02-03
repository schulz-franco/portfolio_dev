import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./mobile.scss";

const Option = ({toSection, image, name, setOpen, isTablet})=> {
	const navbarHeight = isTablet ? 99 : 80;
	const onClickHandler = ()=> {
		setOpen(false);
		window.scroll({ top: document.getElementById(toSection).offsetTop - navbarHeight, behavior: 'smooth' })
	}
	return <div onClick={onClickHandler}><img width={20} height={20} src={image} alt={name} />{name}</div>
}

const NavbarMobile = () => {
	const [open, setOpen] = useState(false);
	const isTablet = useMediaQuery({
        query: '(min-width: 768px)'
    })

	const onOpenHandler = ()=> {
		setOpen(!open);
	}

	const menuClass = open ? 'menu open' : 'menu';
	const scrollableClass = open ? 'scrollable open' : 'scrollable';

	return (
		<nav className="mobile">
			<div className="container">
				<h2>FRAN<b>{'{'}</b>O<b>{'}'}</b></h2>
				<div onClick={onOpenHandler} className={menuClass}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className={scrollableClass}>
				<Option toSection='inicio' isTablet={isTablet} image="/assets/navbar/home.svg" name='Inicio' setOpen={setOpen} />
				<Option toSection='quiensoy' isTablet={isTablet} image="/assets/navbar/profile.svg" name='Quien soy' setOpen={setOpen} />
				<Option toSection='experiencia' isTablet={isTablet} image="/assets/navbar/experience.svg" name='Experiencia' setOpen={setOpen} />
				<Option toSection='proyectos' isTablet={isTablet} image="/assets/navbar/jobs.svg" name='Proyectos' setOpen={setOpen} />
				<Option toSection='laboratorio' isTablet={isTablet} image="/assets/navbar/lab.svg" name='Laboratorio' setOpen={setOpen} />
				<Option toSection='conocimientos' isTablet={isTablet} image="/assets/navbar/book.svg" name='Conocimientos' setOpen={setOpen} />
				<Option toSection='contacto' isTablet={isTablet} image="/assets/navbar/contact.svg" name='Contacto' setOpen={setOpen} />
				<Option toSection='creditos' isTablet={isTablet} image="/assets/navbar/credits.svg" name='Créditos' setOpen={setOpen} />
			</div>
		</nav>
	)
}

export default NavbarMobile