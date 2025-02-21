import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

//utils
import handleChangeUser from "../../utils/helpers/handleChangeUser.js";
import Users from "../../api/users.js";

const UserForm = () => {
    const [usersState, setUsersState] = useState([]);

    const getUsers = async () => {
        try {
            const users = await Users.getUsers();
            console.log(users);
            setUsersState(users);
        } catch (error) {
            console.log("Error Al Obtener Usuarios:", error);
        }
    };

    const updateUserRole = async (id, role) => {
        try {
            await Users.updateUserRole(id, role);
            getUsers();
        } catch (error) {
            console.error("Error al actualizar el rol:", error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await Users.deleteUser(id);
            getUsers();
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
        }
    };

    const itsSameUser = (id) => {

        const token = window.localStorage.getItem("jwt");
        const userData = jwtDecode(token);
        const userId = userData.id;

        if(id == userId){
            return true
        }else{
            return false
        }

    }

    const returnRole = (role) => {
        let userRole;
        switch (role) {
            case "1":
                userRole = "Usuario";
                break;
            case "2":
                userRole = "Administrador";
                break;
            case "3":
                userRole = "Administrador Mas Pija";
                break;
            default:
                userRole = "Rol No Identificado";
                break;
        }
        return userRole;
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container">
            {usersState.length == 0 ? (
                <h3 className="no-users">Ningún Usuario Cargado</h3>
            ) : (
                <div className="user-list">
                    {usersState.map((user) =>{

                        return <>{
                            itsSameUser(user.id) ? null : <div key={user.id} className="user-card">
                            
                            <h3>{user.username}</h3>
                            <p>Email: {user.email}</p>
                            <p>Rol: {returnRole(user.role)}</p>
                            <select
                                onChange={(e) => updateUserRole(user.id, e.target.value)}
                                defaultValue={user.role}
                            >
                                <option value="1">Usuario</option>
                                <option value="2">Administrador</option>
                                <option value="3">Administrador Mas Pija</option>
                            </select>
                            <button onClick={() => deleteUser(user.id)}>Eliminar</button>
                        </div>
                        }
                        </>

                    })}
                </div>
            )}
            <style jsx>{`
                .container {
                    padding: 20px;
                    margin: auto;
                }
                .no-users {
                    text-align: center;
                    color: red;
                }
                .user-list {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .user-card {
                    padding: 15px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    background: #f9f9f9;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
                .user-card h3 {
                    margin: 0 0 5px 0;
                }
                .user-card p {
                    margin: 3px 0;
                    font-size: 14px;
                }
                .user-card select, .user-card button {
                    margin-top: 5px;
                }
            `}</style>
        </div>
    );
};

export default UserForm;
