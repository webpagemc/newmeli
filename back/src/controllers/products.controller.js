import {CrudService} from "../services/crud.js"

const Products = new CrudService("src/db/products.json");

export const productController = {

    getProducts:async(req, res)=>{
    
        try {
            
            const data = await Products.getAll();
            res.status(200).json(data);
            
        } catch (error) {
            res.status(400).json(error)
        }
    
    },

    createProduct:async(req, res)=>{
    
        try {
    
            const {body} = req;
            const response = await Products.createOne(body);
    
            res.status(200).json({response})
            
        } catch (error) {
            res.status(400).json(error)
        }
    
    },

    updateProduct:async(req, res)=>{
    
        try {
    
            const { params, body } = req;
            const { id } = params;
    
            const response = await Products.updateOne( id, body );
            res.status(200).json({response})
            
        } catch (error) {
            res.status(400).json(error)
        }
    
    },

    deleteProduct:async(req, res)=>{

    try {
        
        const {id} = req.params;

        const response = await Products.deleteOne(id);
        res.status(200).json({response})
        
    } catch (error) {
        res.status(400).json(error)
    }

}
};