
import { useState } from 'react'
import './Styles/App.css'
import Buttons from './Components/Buttons'
import Input from './Components/Input'

let parenthesis = 0; // count of parenthesis

export default function App() {

  const [input, setInput] = useState("");

  let count = input.length; //The lenght of the input field
  let element = input[count-1];  //The last element in the input field
  //console.log("The lenght is: ", count, "\nValue of the last element is: ", element)


  function Calculator(character){

    switch(character){
      case "C":
        setInput("")
        parenthesis = 0;
        break;
      case "=":
        setInput(eval(input))
        break;
      case "()":
        //if the input field is empty and the last element is not a number add '('
        if(input == "" || element == "("  || element == "-"){
          setInput(input + "(")
          parenthesis++
        }
        //if the last element is a number and parenthesis count is not equal to 0, add ')' until the parenthesis count is equal to 0
        else{
          if(parenthesis != 0){
            setInput(input + ")")
            parenthesis--;
          }
          else{
            setInput(input + "*(")
            parenthesis++
          }
        }

        //console.log(parenthesis," count of parenthesis")
        break;
      case "%":
        setInput(eval(input/100))
        break;
      case "+/-":

        //If the input field is empty add '(-'
        if(input == ""){
          setInput(input + "(-")
          parenthesis++
        }
        else{  
          if(!isNaN(element)){
            if(input[count-2] == "-" && input[count-3] == "("){
              let str = input.slice(0, count-3)
              setInput(str + element)
              parenthesis--
              //console.log("The last element is a number: ",element,"\nAnd the two values before it are: ",input[count-2], " and ",input[count-3])
            }
            else{
              let str = input.slice(0, count-1)
              setInput(str + "(-" + element)
              parenthesis++
              //console.log("The last element is a number: ",element,"\nAnd the two values before it are not (-")
            }
          }
          else{
            if(input.length < 3){
              setInput("")
              parenthesis--
            }
            else{
              if(input[count-1] == "-" && input[count-2] == "("){
                let str = input.slice(0,count-2)
                setInput(str)
                parenthesis--
                console.log("not a number the string is", str)
              }else{
                setInput(input + "(-")
                parenthesis++
                console.log("AA")
              }
              console.log("The last element is not a number: ",element)
            }
          }
        }
        break;
      default:
        setInput(input + character)
        break;
    }
  }

  return (
    <div className='calculator'>  
      <div className='input'>
        <Input input={input} />
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
