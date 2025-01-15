import {CrudService} from "../services/crud.js"

const Users = new CrudService("src/db/users.json");

export const userControllers = {

    getUsers:async(req, res)=>{
    
        try {
            
            const data = await Users.getAll();
            res.status(200).json(data);
            
        } catch (error) {
            res.status(400).json(error)
        }
    
    },

    updateUser:async(req, res)=>{
    
        try {
    
            const { params, body } = req;
            const { id } = params;
    
            const response = await Users.updateOne( id, body );
            res.status(200).json({response})
            
        } catch (error) {
            res.status(400).json(error)
        }
    
    },

    deleteUser:async(req, res)=>{

    try {
        
        const {id} = req.params;

        const response = await Users.deleteOne(id);
        res.status(200).json({response})
        
    } catch (error) {
        res.status(400).json(error)
    }

}
};