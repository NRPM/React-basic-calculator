import React from 'react'


export default function Display(props){
    return(
        <>
            <input type="text"  className="display" disabled value={props.displayedValue} />
        </>
    )
}