//react
import { useState } from "react";

//utils
import handleChangeUser from "../../utils/helpers/handleChangeUser.js";

const userForm = () => {

    const model = {
        email:"",
        password:"",
        role:"user"
    }
    
    const [ formState, setFormState ] = useState(model);

    const handleSubmit = (event) => {

        event.preventDefault();

        if (!formState.email.includes(["@"])) {
            throw new Error("Che esto no es un mail");
        };

        if (!formState.password) {
            throw new Error("Che, llena el password");
        };

        console.log(formState)
    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Email" value={formState.email} onChange={ (event)=>{ handleChangeUser(event, formState, setFormState,"email") } } />
            <input type="password" placeholder="Password" value={formState.password} onChange={(event)=>{ handleChangeUser(event, formState, setFormState, "password") }} />
            <select name="role" defaultValue={"user"}  onChange={(event)=>{ handleChangeUser(event, formState, setFormState, "role") }}>
                <option value="user">user</option>
                <option value="admin">admin</option>
                <option value="sysAdmin">sysAdmin</option>
            </select>

            <button type="submit"> Cargar Usuario </button>
        </form>
    )

};

export default userForm;