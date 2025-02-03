import { useContext, useEffect } from "react";
import { ThemeContext } from "../../hooks/theme.ctx";
import "../../styles/components/headers/dashboardHeader.css";
import "../../styles/pages/footer.css"; 
import env from "../../utils/enviroment";

const DashboardHeader = () => {
    const { themeState, setThemeState } = useContext(ThemeContext);

    useEffect(() => {
        const theme = window.localStorage.getItem("theme") ?? "light";
        setThemeState(theme);
    }, []);

    useEffect(()=>{

        const token = window.localStorage.getItem("jwt");

        if(!token || token == "{}"){

            window.location.href = env.frontUrl

        }
        
    })

    const changeTheme = () => {
        const newTheme = themeState === "light" ? "dark" : "light";
        setThemeState(newTheme);
        window.localStorage.setItem("theme", newTheme);
        console.log(newTheme);
    };

    return (
        <header className={themeState === "dark" ? "header-dark" : "header-light"}>
            <img className="header-image" src="/images/logo.png" alt="Logo" />
            <nav>
                <a className={`link ${themeState === "dark" ? "link-dark" : "link-light"}`} href="/dashboard">Ver Productos</a>
                <a className={`link ${themeState === "dark" ? "link-dark" : "link-light"}`} href="/admin">Gestionar Productos</a>
                <button onClick={changeTheme}>Cambiar Tema</button>
            </nav>
        </header>
    );
};

export default DashboardHeader;

