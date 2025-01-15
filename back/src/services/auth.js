import uuid4 from "uuid4";
import {writeFileSync, readFileSync} from "fs";
import { bcryptHelper } from "../utils/bcrypt.js";
import { jwtHelper } from "../utils/jwt.js";

class AuthService{

    constructor(dbPath){

        this.dbPath = dbPath;

    };

    #WriteDB(data){
        try {

            const serializedData = JSON.stringify(data);
            writeFileSync(this.dbPath, serializedData);
            
        } catch (error) {
            throw new Error("Error to write Data: ", error.message)
        }
    }

    #ReadDB(){
        try {

            const data = readFileSync(this.dbPath, "utf-8");

            if(!data){ return [] }

            const deserealizedData = JSON.parse(data);
            return deserealizedData;
            
        } catch (error) {
            throw new Error("Error to get Data: ", error.message)
        }
    };

    async login(email, password){

        const data = await this.#ReadDB();

        const user = data.find( user => email == user.email );
        if(!user){ throw new Error("User not exist") };

        const passwordMatch = bcryptHelper.compare(password, user.password);
        if(!passwordMatch){ throw new Error("Incorrect password") };

        const token = jwtHelper.encrypt(user);
        return token;
    };

    async register(body){

        const data = await this.#ReadDB();

        let user = data.find( user => body.username == user.username || body.email == user.email );
        if(user){ throw new Error("username or email was registered") };

        const passwordEncrypt = bcryptHelper.encrypt(body.password);

        user = {
            ...body,
            password: passwordEncrypt,
            id:uuid4()
        };

        data.push(user);
        this.#WriteDB(data)

        return user;
    }
    
};

export {AuthService};