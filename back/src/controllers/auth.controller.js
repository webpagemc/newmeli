import {AuthService} from "../services/auth.js"

const Auth = new AuthService("src/db/users.json");

export const authControllers = {

    loginUser:async(req, res)=>{
    
        try {

            const {email, password} = req.body;

            console.log(email, password)

            const token = await Auth.login(email, password);

            res.status(200).send(token);
            
        } catch (error) {
            res.status(400).json(error)
        }
    
    },

    registerUser: async(req, res) => {

        try {

            const body = req.body;
            const user = Auth.register({...body, role:"1"});

            res.status(200).json(user)
            
        } catch (error) {
            res.status(400).json(error)
        }

    }

};