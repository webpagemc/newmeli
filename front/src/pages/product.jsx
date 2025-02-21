//react
import { useEffect, useState, useContext } from "react";

//api
import Products from "../api/products.api.js"

//components
import DashboardHeader from "../components/headers/dashboardHeader.jsx"
import Footer from "../components/footers/footer.jsx";

//utils
import env from "../utils/enviroment.js";

//ctx
import { ThemeContext } from "../hooks/theme.ctx.jsx";

const ProductPage = () => {

    const addProductToCart = () => {

        const cart = window.localStorage.getItem("cart");
        //selecciona el carrito desde el localstorage

        //si el carrito no existe
        if(!cart){

            //crea un array
            let newCart = [];

            //le mete el nuevo producto
            newCart.push( {...productState, quantity: 1} );

            //convertimos el carrito a string para que pueda ser almacenado en el localstorage
            const serealizedCart = JSON.stringify(newCart);

            //guardamos el carrito dentro del localstorage
            window.localStorage.setItem("cart", serealizedCart);

        }else{

            // tomamos el carrito hecho string y lo volvemos a la normalidad (deserealizar)
            //convertimos el "[]" a []
            const deserelealizedCart = JSON.parse(cart);

            const productIndex = deserelealizedCart.findIndex(product => product.id == productState.id);
            
            if (productIndex !== -1) {
                
                deserelealizedCart[productIndex] = { ...productState, quantity: deserelealizedCart[productIndex].quantity + 1 };
            } else {
                deserelealizedCart.push(productState);
            }
            
            //convertimos el carrito a string para que pueda ser almacenado en el localstorage
            const serealizedCart = JSON.stringify(deserelealizedCart);

            //guardamos el carrito dentro del localstorage
            window.localStorage.setItem("cart", serealizedCart);

        }
        
    }

    const [ productState, setProductState ] = useState(null);

    useEffect(()=>{

        const getProduct = async() => {

            //obtener el id desde el localstorage
            const idProduct = window.localStorage.getItem("product")

            if(!idProduct){
                window.location.href = `${env.frontUrl}/dashboard`
            }

            //hacer la peticion a la base de datos usando el id
            const product = await Products.getProducts(idProduct);

            //establecer el valor de productState en product (el producto obtenido de la DB)
            setProductState(product);

        };

        getProduct();

    },[]);

    //ctx
    const { themeState, setThemeState } = useContext(ThemeContext);

    useEffect(() => {
        const theme = window.localStorage.getItem("theme") ?? "light";
        setThemeState(theme);
    }, []);

    return(
        <>
       <DashboardHeader/>
        
        {
            !productState 
            ? <h1>Cargando...</h1> 
            : <div>
                <h1>{productState.title}</h1>
                <img src={productState.imageURL} />
                <h3>{productState.price}</h3>
                <p>{productState.description}</p>
                <button onClick={addProductToCart}>Agregar Al Carrito</button>
               
            </div>
        }

        <Footer/>
        </>

    )

};

export default ProductPage;