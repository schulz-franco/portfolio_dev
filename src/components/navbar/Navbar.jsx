import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./navbar.scss";

const sections = ["inicio", "quiensoy", "experiencia", "proyectos", "laboratorio", "conocimientos", "contacto", "creditos"];

const Option = ({id, image, name, setOpen, isTablet})=> {

	const navbarHeight = isTablet ? 99 : 80;

	const onClickHandler = ()=> {
		setOpen(false);
		window.scroll({ top: document.getElementById(sections[id]).offsetTop - navbarHeight, behavior: 'smooth' })
	}

	return <div onClick={onClickHandler}><img width={20} height={20} src={image} alt={name} />{name}</div>
}

const Navbar = () => {
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
				<Option id={0} isTablet={isTablet} image="/assets/navbar/home.svg" name='Inicio' setOpen={setOpen} />
				<Option id={1} isTablet={isTablet} image="/assets/navbar/profile.svg" name='Quien soy' setOpen={setOpen} />
				<Option id={2} isTablet={isTablet} image="/assets/navbar/experience.svg" name='Experiencia' setOpen={setOpen} />
				<Option id={3} isTablet={isTablet} image="/assets/navbar/jobs.svg" name='Proyectos' setOpen={setOpen} />
				<Option id={4} isTablet={isTablet} image="/assets/navbar/lab.svg" name='Laboratorio' setOpen={setOpen} />
				<Option id={5} isTablet={isTablet} image="/assets/navbar/book.svg" name='Conocimientos' setOpen={setOpen} />
				<Option id={6} isTablet={isTablet} image="/assets/navbar/contact.svg" name='Contacto' setOpen={setOpen} />
				<Option id={7} isTablet={isTablet} image="/assets/navbar/credits.svg" name='Créditos' setOpen={setOpen} />
			</div>
		</nav>
	)
}

export default Navbar