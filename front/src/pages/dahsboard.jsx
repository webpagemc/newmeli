//react
import { useState, useEffect, useContext } from "react"

//components
import DashboardHeader from "../components/headers/dashboardHeader.jsx";
import ProductsSlider from "../components/sliders/productsSlider.jsx";
import ProductContainer from "../components/containers/productContainer.jsx"
import Footer from "../components/footers/footer.jsx";
import "../styles/main.css";  // Ajusta según la estructura de tu proyecto


//api
import Products from "../api/products.api.js"

//ctx
import { ThemeContext } from "../hooks/theme.ctx.jsx";

const DashboardPage = () => {
    // State for products
    const [productsState, setProductsState] = useState([]);

    // Fetch products
    const getProducts = async () => {
        try {
            const products = await Products.getProducts();
            console.log("Productos:", products); // Verifica el tipo de dato devuelto
            setProductsState(Array.isArray(products) ? products : []); // Asegura que sea un arreglo
        } catch (error) {
            console.error("Error al obtener productos:", error);
            setProductsState([]); // Si hay error, inicializa como un arreglo vacío
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    // Context for theme
    const { themeState, setThemeState } = useContext(ThemeContext);

    useEffect(() => {
        const theme = window.localStorage.getItem("theme") ?? "light";
        setThemeState(theme);
    }, []);

    return (
        <>
            <DashboardHeader />
            <ProductsSlider />
            <div className="dashboardPage_productsContainer">
                {
                    Array.isArray(productsState) && productsState.length > 0
                    ? productsState.map((element, index) => (
                        <ProductContainer key={index} product={element} />
                    ))
                    : <h1>Cargando...</h1>
                }
            </div>
            <Footer />
        </>
    );
};

export default DashboardPage;