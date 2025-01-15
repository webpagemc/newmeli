const handleChangeForm = (event,formState ,setFormState ,key) => {

    console.log(key)

    switch (key) {
        case "title":
            setFormState({...formState, title: event.target.value})
            break;
        case "description":
            setFormState({...formState, description: event.target.value})
            break; 
        case "price":
            setFormState({...formState, price: event.target.value})
            break;
        case "category":
            setFormState({...formState, category: event.target.value})
            break;
        case "imageURL":
            setFormState({...formState, imageURL: event.target.value})
            break;        
    
        default:
            throw new Error("Invalid Key!")
            break;
    }

};

export default handleChangeForm;