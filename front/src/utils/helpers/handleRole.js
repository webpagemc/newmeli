import { jwtDecode } from "jwt-decode";
import env from "../enviroment";

const handleRole = (role) => {

    const token = window.localStorage.getItem("jwt");

    const decodedToken = jwtDecode(token);

    console.log(decodedToken.role);
    console.log(role)

    if( decodedToken.role.toString() < role.toString()){

        window.location.href = env.frontUrl + "/dashboard"

    }

};

export default handleRole;

