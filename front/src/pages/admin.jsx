//components
import DashboardHeader from "../components/headers/dashboardHeader.jsx";
import AddProductForm from "../components/forms/AddProductForm.jsx";

import { useEffect, useState } from "react";

//styles
import "../styles/components/buttons/DeleteButton.css";
import "../styles/components/buttons/UpdateButton.css"; 

//api
import Products from "../api/products.api.js"
import env from "../utils/enviroment.js";

//utils
import handleRole from "../utils/helpers/handleRole.js";

const AdminPage = () => {

    const [productsState, setProductsState] = useState([]);

    const getProducts = async() => {

        const products = await Products.getProducts();

        if(!products){
            setProductsState([]);
        }else{
            setProductsState(products);
        }

    };

    const deleteProduct = async(id) => {

        const deleteResult = await Products.delete(id);

        if(deleteResult){

            console.log("Producto Eliminado");
            window.location.reload();

        }else{
            console.error(`El producto: ${id} no se elimino`)
        }

    }

    const redirectToUpdate = (id) => {

        window.localStorage.setItem("product", id);
        window.location.href = `${env.frontUrl}/updateProduct`
    }

    useEffect(()=>{ 

        handleRole(2);
        getProducts() 
    
    },[]);

    return(

        <div className="admin-container-products">

            <DashboardHeader></DashboardHeader>
            <AddProductForm></AddProductForm>
                {
                    productsState.length == 0
                    ? <h1>Cargando Productos...</h1>
                    : productsState.map((element, index)=>{
                        return <div key={index}> 
                        <img style={{"width":"50px", "height":"50px", "margin":"10px"}} src={element.imageURL} alt="" />
                        {element.title} - {element.price} 
                        <button className="deleteButton" onClick={()=>{ deleteProduct(element.id) }}> Eliminar </button> 
                        <button className="updateButton" onClick={()=>{ redirectToUpdate(element.id) }}> Actualizar </button>
                        </div>
                    })
                }
            
        </div>
    )

};

export default AdminPage;