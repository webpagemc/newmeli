import env from "../utils/enviroment"

const Users = {
    getUsers: async (id) => {
        let url;
        const token = window.localStorage.getItem("jwt");

        url = `${env.backUrl}/api/users`;

        const options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        const request = await fetch(url, options);

        if (!request.ok) {
            console.error("Request Error!");
            return false;
        }

        const response = await request.json();

        if (id) {
            const user = response.find(element => element.id == id);

            if (!user) {
                throw new Error(`user ${id} Not Found`);
            }

            console.log(`Request Successfull: user: ${id}`);
            return user;
        } else {
            console.log("Request Successfull: all users");
            return response;
        }
    },
    
    updateUserRole: async (id, role) => {
        let url = `${env.backUrl}/api/users/${id}`;

        const token = window.localStorage.getItem("jwt");
        
        const options = {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ role })
        };

        const request = await fetch(url, options);

        if (!request.ok) {
            console.error("Update Request Error!");
            return false;
        }

        console.log(`User ${id} role updated to ${role}`);
        const response = await request.json();
        return response;
    },

    deleteUser: async (id) => {
        let url = `${env.backUrl}/api/users/${id}`;
        const token = window.localStorage.getItem("jwt");
        
        const options = {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        const request = await fetch(url, options);

        if (!request.ok) {
            console.error("Delete Request Error!");
            return false;
        }

        console.log(`User ${id} deleted successfully`);
        return true;
    }
};
export default Users;