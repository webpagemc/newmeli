//react
import { createContext, useState } from "react";

//crea el contexto
const ThemeContext = createContext();

//creamos el componente proveedor
const ThemeProvider = ({children}) => {

    //creamos el estado que van a poder usar todas las paginas envueltas por el proveedor
    const [themeState, setThemeState] = useState("light");

    //retornamos el componente
    return(
        <ThemeContext.Provider value={ {themeState, setThemeState} }>
            {children}
        </ThemeContext.Provider>
    )

};

export { ThemeContext, ThemeProvider };
