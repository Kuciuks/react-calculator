
import React, { useState } from 'react'
import './App.css'
import Buttons from './Buttons'
import Input from './Input'

export default function App() {

  const [input, setInput] = useState("");

  function Calculator(number){
    
    //Updates the input field with pressed buttons
    setInput(input + number)
    
    //If pressed =, then evaluate the input
    if(number == "="){
      const sum = eval(input)
      setInput(sum)
      console.log("Calculated answer is: ",sum)
    }

    //If pressed C, then clear input field
    if(number == "C"){
      setInput("")
      console.log("Cleared the input field")
    }

    //If pressed (), then add () 
    if(number == "()"){

      let parenthesisBefore = false;

      //If input field is empty, then add (
      if(input.length < 1){
        parenthesisBefore = !parenthesisBefore;
        setInput("(")
        console.log("added (")
      }
      if(input.length > 1 && parenthesisBefore == true){
        parenthesisBefore = !parenthesisBefore;
        setInput(input + ")")
      }
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
        <Buttons number="7" onClick={()=>Calculator("7")}/>
        <Buttons number="8" onClick={()=>Calculator("8")}/>
        <Buttons number="9" onClick={()=>Calculator("9")}/>
        <Buttons number="x" onClick={()=>Calculator("*")}/>
        <Buttons number="4" onClick={()=>Calculator("4")}/>
        <Buttons number="5" onClick={()=>Calculator("5")}/>
        <Buttons number="6" onClick={()=>Calculator("6")}/>
        <Buttons number="-" onClick={()=>Calculator("-")}/>
        <Buttons number="1" onClick={()=>Calculator("1")}/>
        <Buttons number="2" onClick={()=>Calculator("2")}/>
        <Buttons number="3" onClick={()=>Calculator("3")}/>
        <Buttons number="+" onClick={()=>Calculator("+")}/>
        <Buttons number="+/-" onClick={()=>Calculator("+/-")}/>
        <Buttons number="0" onClick={()=>Calculator("0")}/>
        <Buttons number="." onClick={()=>Calculator(".")}/>
        <Buttons number="=" onClick={()=>Calculator("=")}/>
      </div>
    </div>
  )
}
