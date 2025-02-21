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

    const logOut = () => {
        window.localStorage.removeItem("jwt");
        window.location.reload();
    }

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
                <button onClick={logOut}>Cerrar Sesion</button>
                <a className={`link ${themeState === "dark" ? "link-dark" : "link-light"}`} href="/dashboard">Ver Productos</a>
                <a className={`link ${themeState === "dark" ? "link-dark" : "link-light"}`} href="/admin">Gestionar Productos</a>
                <a className={`link ${themeState === "dark" ? "link-dark" : "link-light"}`} href="/sysadmin">Gestionar Usuarios</a>
                <button onClick={changeTheme}>Cambiar Tema</button>
                <a href="/cart">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA3RJREFUaEO9WTuW2zAMBJtUqXIi74GSK2S3yQVyIHsPlFRbpVFMieIHAIEB7bcq/GwRv8GAICQnKlcioo0SUdryF3bV1bp03DEuQ0Au2dYs+bw2v9woTe1PWWQAJAM9BpsllbQ1ELPEKfdzxF4x4EGETCFl6Ru0S4ieCg9PREDSBaDa8hMzqkXl3cQ1g7KEEm1Kq7kR0fs9qlcsOWwvLQDA/BwVwi+rO75hIGR9SzfR1qlDigLIVl6I6PaspEbPBO2E2u91hhoDapTpRrRlEO6F8OAacbpzZcDI6IWIrszOzoLpPETRbALw4aFdKAPIQM4rBw+x4IfA+McUqhR6kAkWSs4AdyEqAg30cM0AyMGhi7CxcIj5ZQTA60WiUE/uUDfKXlhx2blj6sAI1Np4EUY2cQ+wdqjndPE5mElWxd5DN/Fp7yijBxOvBofbHGKOAtBaKlqCcoPiQZ8+3u4qr/2oEAWQDV0p0aV7cCu02r1cPxPdSX4caxK90DaePzaA6nVwr7GwkAg3/Xlw/OmdPSCA2nPPQZUPfGpLlSG6QfflyA9PdZCUAIBeRomuaaNLh0KezEasAAyY5QXq9yQVB0MoIwtAlMbu5+UzHeNxBvrp4yikB+cjE2Eht8owAE2XAQDTdogZNCN1OM0/z36bGBSzB4B+AcRQ3HMWAvPR1NEO4FjdP0v2uzvsAA8cREKUs9A2cywR6rhSbppJMTYxXAZQS+0bsYEN6v18ghVVFKSEj9nLDzuJ6LqND07uSwTwIDPrQX/kTHRT3xPPH1ng3t9nXG5iN/0qGL6ZXSuAgJv91p4Aa45IzV6FZ2yhGTPsqPlUANm3+XfBQo6g8l4dJbR44GcFp8OarzG5rnESG27Ykiq5fg6EyFoDIOei885XIvpSfvwjog8tGgXbqJfoo3/BXPeM8swkS2ghc0Xl2z3YfBB9L0H/Lr//Oild1avdNETZRDhn8FcX/CmWQfxoOiI7TW9cYnrzENc2seyVOYt/Jm4sH4t6DW01vlA5fbxuIBLzfmfQU3qDWx0hBgyQYAmJeFb1hjbSjxadhz5cGbqyuroZcT2oCxmkPVhmbjn0AqivUAmFInBflM+sHaHXz35wUlCpAFD0UUBCfuYoEADIwPpfQHYHD85/DzEQyIrJDOunuFm9qdgMuNaVzg0n1e5yaHn+B5dYMkDxqQfcAAAAAElFTkSuQmCC"/>
                </a>

            </nav>
        </header>
    );
};

export default DashboardHeader;

