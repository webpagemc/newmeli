const handleChangeForm = (event, formState ,setFormState ,key) => {

    switch (key) {
        case "email":
            setFormState({...formState, email: event.target.value})
            break;
        case "password":
            setFormState({...formState, password: event.target.value})
            break;  
        case "role":
            setFormState({...formState, role: event.target.value})
            break;  
    
        default:
            throw new Error("Invalid Key!")
            break;
    }

};

export default handleChangeForm;