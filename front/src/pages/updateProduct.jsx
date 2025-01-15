import { useEffect } from "react";
import UpdateProductForm from "../components/forms/updateProductForm.jsx";
import handleRole from "../utils/helpers/handleRole.js";

const UpdateProductPage = () => {

    useEffect(()=>{
        handleRole(2);
    },[])

    return(

        <>
        <UpdateProductForm></UpdateProductForm>
        </>

    )

};

export default UpdateProductPage;