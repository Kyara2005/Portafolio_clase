import { Main } from '../main/Main';
import './Header.css';
import{ Link } from "react-router"

const Header = () => {
    return (
        <header>
            <nav className="navbar__container">
                <p className="navbar__logo"></p>
                <ul className="navbar__menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#project">Proyectos</a></li>
                    <li><a href="#expericie">Experticia</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li><Link to="/login">Ingresar</Link></li>
                    <li><Link to="/register">Registrarse</Link></li>
                </ul>
            </nav>
            <Main/>
        </header>
    )
}

export default Header
