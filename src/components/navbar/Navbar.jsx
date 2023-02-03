import { useMediaQuery } from "react-responsive";
import NavbarDesktop from "./Desktop";
import NavbarMobile from "./Mobile";

const Navbar = () => {
	const isDesktop = useMediaQuery({
        query: '(min-width: 1020px)'
    })

	if (isDesktop) return <NavbarDesktop/>
	return <NavbarMobile/>
}

export default Navbar