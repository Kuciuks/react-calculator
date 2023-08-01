/* eslint-disable react/prop-types */
import './Buttons.css'

function Buttons(props){

    return(
    <div className='buttons'>
        <button onClick={props.onClick}>{props.number}</button>
    </div>
    )
}

export default Buttons;