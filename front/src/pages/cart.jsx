import { useEffect, useState } from "react";
import DashboardHeader from "../components/headers/dashboardHeader";

const CartPage = () => {

    const [cartState, setCartState] = useState([]);

    const getProductsFromCart = () => {

        const serializedCart = window.localStorage.getItem("cart");

        if(!serializedCart){}else{
            const cart = JSON.parse(serializedCart);
            setCartState(cart)
        }

    };

    const resetCart = () => {
        window.localStorage.removeItem("cart");
        window.location.reload()
    };

    const buyCart = () => {

        const serializedCart = window.localStorage.getItem("cart");

        if(!serializedCart){
            alert(`No hay productos en tu carrito`)
        }else{

            const cart = JSON.parse(serializedCart);
            setCartState(cart)

            let total = 0;

            cart.map((element)=>{

                total += element.price * element.quantity;

            });

            alert(`El total de tu compra es: ${total}`)

        }




    }

    useEffect(()=>{

        getProductsFromCart();

    }, []);


    
    return(
        <div>
        <DashboardHeader />
        <div>
            <h1>Carrito</h1>

            <div>
                {
                    cartState.length == 0
                    ? <h3> Carrito Vacio </h3>
                    : cartState.map((element, index)=>{


                        return (
                            <div>
                                <img style={{
                                    width:"50px",
                                    height:"auto"
                                }} src={element.imageURL} alt={element.title} />
                                <h3 key={index}> {element.title} - {element.price} </h3>
                                <h2>Cantidad: {element.quantity}</h2>
                            </div>

                        )

                    })
                }
                <a href="">Agregar Mas Productos</a> <br />
                <button onClick={resetCart}>Reiniciar Carrito</button> <br />
                <button onClick={buyCart}>Comprar</button>
            </div>

        </div>
        </div>
    )

};

export default CartPage;