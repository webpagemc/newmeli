import { useContext } from "react";
import { ThemeContext } from "../../hooks/theme.ctx";
import "../../styles/pages/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    const { themeState } = useContext(ThemeContext);

    return (
        <footer className={themeState === "dark" ? "footer-dark" : "footer-light"}>
            <div>
                <Link to='/about' className={`link ${themeState === "dark" ? "link-dark" : "link-light"}`}>Sobre Nosotros</Link>
                <a href="" className={`link ${themeState === "dark" ? "link-dark" : "link-light"}`}>Términos y Condiciones</a>
                <a href="" className={`link ${themeState === "dark" ? "link-dark" : "link-light"}`}>Preguntas Frecuentes</a>
                <a href="" className={`link ${themeState === "dark" ? "link-dark" : "link-light"}`}>Defensa al Consumidor</a>
            </div>

            <div>
                <img src="" alt="" />
                <p>©Copyright Mercado Liebre 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
