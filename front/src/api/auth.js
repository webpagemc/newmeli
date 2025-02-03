import env from "../utils/enviroment.js"

const Auth = {

    login: async(body) => {

        //url de la api
        let url = `${env.backUrl}/api/auth/login`;

        //opciones de configuracion de la peticion
        let options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
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

    register: async(body) => {
        //url de la api
        let url = `${env.backUrl}/api/auth`;

        //opciones de configuracion de la peticion
        let options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        };

        //hacer la peticion
        const request = await fetch(url, options);

        //convertir la respuesta de la peticion a texto
        const response = await request.json();

        //retornar la respuesta
        return response;
    }

};

export default Auth;