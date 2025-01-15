import { jwtHelper } from "../utils/jwt.js";

export const AuthMiddleware = (role) => {

    return (req, res, next) => {

        const token = req.headers.authorization

        const removeBearer = token.split(" ")[1];

        const validation = jwtHelper.verify(removeBearer);

        const userRole = validation.role;

        if(userRole >= role){

            next();

        }else{

            res.status(400).json({message:`El rol requerido es ${role} y tu rol es ${userRole}`});

        }



    }

};