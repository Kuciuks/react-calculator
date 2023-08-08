
import { useState } from 'react'
import './Styles/App.css'
import Buttons from './Components/Buttons'
import Input from './Components/Input'

let parenthesis = 0; // count of parenthesis

export default function App() {

  const [input, setInput] = useState("");

  let count = input.length; //The lenght of the input field
  let element = input[count-1];  //The last element in the input field


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

        //If the input field is not empty
        else{  
          //If the last element is a number
          if(!isNaN(element)){
            //If the two elements that come before the number are '(-', remove '(-'
            if(input[count-2] == "-" && input[count-3] == "("){
              let str = input.slice(0, count-3)
              setInput(str + element)
              parenthesis--
            }

            //Add '(-'
            else{
              let str = input.slice(0, count-1)
              setInput(str + "(-" + element)
              parenthesis++
            }
          }

          //If the last element is not a number
          else{
            //If the input field is less than 3 elements, this is for use case where nothing is typed in, but we need to toggle between showing '(-'
            if(input.length < 3 && element != "("){
              setInput("")
              parenthesis--
            }

            //Input field is more than 3 elements
            else{
              //If the last two elements are '(-', remove '(-'
              if(input[count-1] == "-" && input[count-2] == "("){
                let str = input.slice(0,count-2)
                setInput(str)
                parenthesis--
              }

              //If the last element is ')'
              else if(input[count-1] == ")"){
                setInput(input + "*(-")
              }

              //If the last two elements are not '(-', add '(-'
              else{
                setInput(input + "(-")
                parenthesis++
              }
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
      <div>
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
