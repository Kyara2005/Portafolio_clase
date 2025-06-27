import { Main } from '../main/Main';
import './Header.css';
const Header = () => {
    return (
        <header>
            <nav className="navbar__container">
                <p className="navbar__logo"></p>
                <ul className="navbar__menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre mí</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Experticia</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <Main/>
        </header>
    )
}

export default Header
