/* eslint-disable react/prop-types */
function Input(props){
    return(
        <div>
            <p>{props.input !== "" ? props.input : "|"}</p>
        </div>
    )
}

export default Input;