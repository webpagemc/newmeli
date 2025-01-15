import "../../styles/components/buttons/largeButton.css"

const LargeButton = ({text, action}) => {

    return(

        <button className="largeButton_button" onClick={action}> {text} </button>

    )

};


export default LargeButton;