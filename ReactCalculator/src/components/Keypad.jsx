import React, {useState} from 'react'




export default function Keypad(props){
    function handleClick(event){
      
    if(event.target.name === "=")
    {
        props.solve()
    }
    
    else if(event.target.name === "x")
    {
        props.backspace()
    }
    
    else
    {
     props.handleChange(event.target.name)
    }

    }

    return(
        <>
            <button className='backspace' onClick={handleClick} name="x">x</button>
            <div className="keypad-layout">
                <button className="keypad-button" onClick={handleClick} name="1">1</button>
                <button className="keypad-button" onClick={handleClick} name="2">2</button>
                <button className="keypad-button" onClick={handleClick} name="3">3</button>
                <button className="keypad-button" onClick={handleClick} name="+">+</button>
                <button className="keypad-button" onClick={handleClick} name="4">4</button>
                <button className="keypad-button" onClick={handleClick} name="5">5</button>
                <button className="keypad-button" onClick={handleClick} name="6">6</button>
                <button className="keypad-button" onClick={handleClick} name="-">-</button>
                <button className="keypad-button" onClick={handleClick} name="7">7</button>
                <button className="keypad-button" onClick={handleClick} name="8">8</button>
                <button className="keypad-button" onClick={handleClick} name="9">9</button>
                <button className="keypad-button" onClick={handleClick} name="*">*</button>
                <button className="keypad-button" onClick={handleClick} name=".">.</button>
                <button className="keypad-button" onClick={handleClick} name="0">0</button>
                <button className="keypad-button" onClick={handleClick} name="/">/</button>
                <button className="keypad-button" onClick={handleClick} name="=">=</button>
                
            </div>
        </>
    )
}