import jwt from "jsonwebtoken";
import {enviroment} from "../config/dotenv.js"

export const jwtHelper = {

    encrypt: ({id, username, role}) => {

        const payload = {id, username, role};
        const secret = enviroment.JWTSECRET;
        const options = {expiresIn: "24h"};

        const token = jwt.sign(payload, secret, options);

        return token;

    },

    verify: (token) => {

        const verification = jwt.verify(token, enviroment.JWTSECRET);
        return verification;

    }

};