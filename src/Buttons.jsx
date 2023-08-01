/* eslint-disable react/prop-types */
import './Buttons.css'

function Buttons(props){
    return(
    <div className='buttons'>
        <p>{props.number}</p>
    </div>
    )
}

export default Buttons;