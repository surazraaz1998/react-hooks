import React, { useEffect, useRef, useState } from 'react'

export const Timer = () => {
    const [counter,setCounter]=useState(0);
    const interval=useRef(null);
    useEffect(()=>{
       interval.current= setInterval(()=>{
            setCounter(prevCounter=>prevCounter+1)
        },1000);
        console.log("Started setInterval with id: ",interval.current)
        return ()=>{
            clearInterval(interval.current);
        }
        
    },[])
    function stopTimer(){
        console.log("Stopping setInterval id: ",interval.current)
        clearInterval(interval.current)
    }
  return (
    <>
    <span>Current Timer is : {counter}</span>
    <br/>
    <button onClick={stopTimer}>stop Timer</button>
    </>
  )
}
