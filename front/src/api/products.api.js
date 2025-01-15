import env from "../utils/enviroment.js"

const Products = {

    getProducts: async(id)=> {

        let url;
        const token = window.localStorage.getItem("jwt");

        url = `${env.backUrl}/api/Item`

        const options = {
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }

        const request = await fetch(url, options);

        if(!request.ok){
            console.error("Request Error!")
            return false;
        }

        const response = await request.json();

        if(id){

            const product = response.find( element => element.id == id );

            if(!product){
                throw new Error(`Product ${id} Not Found`);
            }

            console.log(`Request Successfull: product: ${id}`);

            return product;

        }else{

            console.log("Request Successfull: all products");
            return response;

        }



    },

    create: async(body) => {

        const token = window.localStorage.getItem("jwt");

        //url de la api
        let url = `${env.backUrl}/api/Item`;

        //opciones de configuracion de la peticion
        let options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body:JSON.stringify(body)
        };

        //hacer la peticion
        const request = await fetch(url, options);

        //convertir la respuesta de la peticion a texto
        const response = await request.text();

        //retornar la respuesta
        return response;

    },

    delete: async(id) => {

        const token = window.localStorage.getItem("jwt");

        //url de la api
        let url = `${env.backUrl}/api/Item/${id}`;

        //opciones de configuracion de la peticion
        let options = {
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        };

        //hacer la peticion
        const request = await fetch(url, options);

        if(request.ok){

            return true;

        }else{
            return false;
        }
    },

    update: async(body) => {

        const token = window.localStorage.getItem("jwt");
        const idProduct = window.localStorage.getItem("product");

        console.log(body)

        //url de la api
        let url = `${env.backUrl}/api/Item/${idProduct}`;

        //opciones de configuracion de la peticion
        let options = {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body: JSON.stringify(body)
        };

        //hacer la peticion
        const request = await fetch(url, options);

        if(request.ok){
            return true
        }else{
            return false
        }
        
    }
};

export default Products;