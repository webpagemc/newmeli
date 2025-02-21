//components
import DashboardHeader from "../components/headers/dashboardHeader";
import Footer from "../components/footers/footer";
import UserForm from "../components/forms/userForm";
import { useEffect } from "react";
import handleRole from "../utils/helpers/handleRole";

const SysAdmin = () => {

    useEffect(()=>{
        handleRole(3);
    },[])
    
    return(
        <>
        <DashboardHeader></DashboardHeader>
        <UserForm></UserForm>
        <Footer></Footer>
        </>
    )

};

export default SysAdmin;