import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Keypad from './components/Keypad'
import Display from './components/Display'


function App() {
  const [displayedValue, setDisplayedValue] = useState("0")

  // setEnteredValue(textToDisplay)
  useEffect(()=>{
    // setDisplayedValue(textToDisplay)
    // console.log("value changed")

  },[displayedValue])

  function showOnDisplay(value){
      setDisplayedValue((prevVal)=>{
      
          if(prevVal === "0")
          {
            return value
          }
          else
          {
            return String(prevVal) + value
          }
      })
  }

  function backspace(){
    setDisplayedValue(prevVal => String(prevVal).slice(0,prevVal.length-1))
  }

  function solveForAns(){
    if(displayedValue.endsWith('+') ||displayedValue.endsWith('-')||displayedValue.endsWith('*')||displayedValue.endsWith('/'))
    {
        alert("Value cannot end with +, -, *, /")
    }
    else
    {
      setDisplayedValue(String(eval(displayedValue)))
    }
  }

  return (
    <>
    <div className="calculator-container">
      <div className="calculator">
        <Display displayedValue={displayedValue}/>   
        <Keypad handleChange={showOnDisplay} solve={solveForAns} backspace={backspace} />
      </div>
    </div>
    </>
  )
}

export default App
