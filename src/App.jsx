
import React, { useState } from 'react'
import './App.css'
import Buttons from './Buttons'
import Input from './Input'

export default function App() {

  const [input, setInput] = useState("");

  let count = input.length; //The lenght of the input field
  let element = input[count-1];  //The last element in the input field
  console.log("The lenght is: ", count, "\nValue of the last element is: ", element)

  function Calculator(character){
    
    switch(character){
      case "C":

        break;
      case "=":

        break;
      case "()":

        break;
      case "%":

        break;
      case "+/-":
        setInput("(-" + input)
        break;
      default:
        setInput(input + character)
        break;
    }
  }

  return (
    <div>  
      <div className='input'>
        <Input input={input}/>
      </div>
      <div className='buttons-area'>
        <Buttons number="C" onClick={()=>Calculator("C")}/>
        <Buttons number="()" onClick={()=>Calculator("()")}/>
        <Buttons number="%" onClick={()=>Calculator("%")}/>
        <Buttons number="/" onClick={()=>Calculator("/")}/>
        <Buttons number="7" onClick={()=>Calculator(7)}/>
        <Buttons number="8" onClick={()=>Calculator(8)}/>
        <Buttons number="9" onClick={()=>Calculator(9)}/>
        <Buttons number="x" onClick={()=>Calculator("*")}/>
        <Buttons number="4" onClick={()=>Calculator(4)}/>
        <Buttons number="5" onClick={()=>Calculator(5)}/>
        <Buttons number="6" onClick={()=>Calculator(6)}/>
        <Buttons number="-" onClick={()=>Calculator("-")}/>
        <Buttons number="1" onClick={()=>Calculator(1)}/>
        <Buttons number="2" onClick={()=>Calculator(2)}/>
        <Buttons number="3" onClick={()=>Calculator(3)}/>
        <Buttons number="+" onClick={()=>Calculator("+")}/>
        <Buttons number="+/-" onClick={()=>Calculator("+/-")}/>
        <Buttons number="0" onClick={()=>Calculator(0)}/>
        <Buttons number="." onClick={()=>Calculator(".")}/>
        <Buttons number="=" onClick={()=>Calculator("=")}/>
      </div>
    </div>
  )
}
