import { useContext, useEffect } from "react";
import DashboardHeader from "../components/headers/dashboardHeader";
import Footer from "../components/footers/footer";
import { ThemeContext } from "../hooks/theme.ctx";
import "../styles/pages/about.css";

const About = () => {
    const { themeState, setThemeState } = useContext(ThemeContext);

    useEffect(() => {
        const theme = window.localStorage.getItem("theme") ?? "light";
        setThemeState(theme);
    }, []);

    return (
        <div className="page-container">
            <DashboardHeader />
            <div className="content">
                <div className={themeState === "dark" ? "about-dark" : "about-light"}>
                    <h1>Sobre Nosotros</h1>
                    <div className="about-content">
                        <div>
                            <h2>Misión</h2>
                            <p>
                                Nuestra misión es conectar compradores y vendedores en una plataforma segura, fácil y accesible,
                                ofreciendo una amplia variedad de productos que satisfagan las necesidades de nuestra comunidad.
                                Nos comprometemos a proporcionar una experiencia de compra y venta en línea excepcional, fomentando la confianza,
                                la innovación y el crecimiento económico en nuestra región.
                            </p>
                        </div>
                        <div>
                            <h2>Visión</h2>
                            <p>
                                Ser el líder en el mercado de comercio electrónico en Argentina, reconocidos por nuestra excelencia en servicio,
                                innovación y compromiso con la comunidad. Queremos ser el destino preferido para compradores y
                                vendedores que buscan una experiencia de compra y venta segura, eficiente y satisfactoria, y
                                ser un motor de crecimiento económico y oportunidades para los empresarios y emprendedores de la región.
                            </p>
                        </div>
                    </div>
                    <p className="follow-us">
                        Seguinos en nuestras <a href="#">redes sociales</a> y enterate de todas las novedades.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;

