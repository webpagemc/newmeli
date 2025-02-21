import {writeFileSync, readFileSync} from "fs";
import uuid4 from "uuid4";

class CrudService {

    constructor(dbPath){

        this.dbPath = dbPath;

    };

    //privates methods

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

    //public methods

    async getAll(){

        const data = await this.#ReadDB();
        return data;

    };

    async createOne(body){

        const data = await this.#ReadDB();

        const obj = {
            id:uuid4(),
            ...body
        }

        data.push(obj)
        this.#WriteDB(data);

        return `Doc whit id: ${obj.id} was created`

    };

    async updateOne(id, body){

        const data = await this.#ReadDB();

        console.log(data)

        const docIndex = data.findIndex(doc => doc.id.toString() === id.toString());

        console.log(docIndex)

        data[docIndex] = {
            ...data[docIndex], 
            ...body
        };

        this.#WriteDB(data);
        return `Doc whit id: ${id} was updated`

    };

    async deleteOne(id){

        const data = await this.#ReadDB();

        const newData = data.filter(doc => doc.id != id);

        this.#WriteDB(newData);
        return `Doc whit id: ${id} was removed`
    };

};

export { CrudService }


