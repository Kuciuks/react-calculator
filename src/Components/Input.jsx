/* eslint-disable react/prop-types */
import '../Styles/Input.css'

function Input(props){
    return(
        <div className='input'>
            <p>{props.input !== "" ? props.input : "|"}</p>
        </div>
    )
}

export default Input;