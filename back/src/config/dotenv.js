import { config } from "dotenv";

config();

const enviroment = {

    PORT:process.env.PORT,
    JWTSECRET: process.env.JWTSECRET

};

export {enviroment}