import { useState } from "react";
import "./navbar.scss";
import homeImg from "../../assets/home.svg";
import profileImg from "../../assets/profile.svg";
import experienceImg from "../../assets/experience.svg";
import jobsImg from "../../assets/jobs.svg";
import labImg from "../../assets/lab.svg";
import bookImg from "../../assets/book.svg";

const scrollsMobile = [0, 300, 500, 200, 200, 200];

const Option = ({id, image, name, setOpen})=> {

	const onClickHandler = ()=> {
		setOpen(false);
		window.scroll({ top: scrollsMobile[id], behavior: 'smooth' });
	}

	return <div onClick={onClickHandler}><img width={20} height={20} src={image} alt={name} />{name}</div>
}

const Navbar = () => {
	const [open, setOpen] = useState(false);

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
				<Option id={0} image={homeImg} name='Inicio' setOpen={setOpen} />
				<Option id={1} image={profileImg} name='Quien soy' setOpen={setOpen} />
				<Option id={2} image={experienceImg} name='Experiencia' setOpen={setOpen} />
				<Option id={3} image={jobsImg} name='Proyectos' setOpen={setOpen} />
				<Option id={4} image={labImg} name='Laboratorio' setOpen={setOpen} />
				<Option id={5} image={bookImg} name='Conocimientos' setOpen={setOpen} />
				<a href="#inicio" className="button">Contactar ahora</a>
			</div>
		</nav>
	)
}

export default Navbar