import './App.css';
import { useCallback, useRef, useState } from 'react';
import Button from './Button';
import { Timer } from './Timer';

function App() {
  // const [message,updateMessage]=useState("Hi Suraj");
  const [counter,setCounter]=useState(0)
  const updaterMethod=useCallback(()=>{
    setCounter((prev)=>prev+1); //pure 
  },[]);

  //useRef
  let mylocal=0;
  const ref=useRef(0);
  const [count,setCount]=useState(0);
  
  console.log("App Component Mounted")
  return (
    <div className="App">
      {/* <div>{counter}</div> //useState example
      <Button clickHandler={updaterMethod}>Count ++</Button> */}
      <div>
        <button onClick={()=>{mylocal+=1}}>Update Local variable</button>
        <button onClick={()=>ref.current+=1}>Update Ref variable</button>
        <button onClick={()=>{setCount(prev=>prev+1)}}>Update State variable</button>
        <br/>
        <span>{mylocal}</span><br/>
        <span>{ref.current}</span><br/>
        <span>{count}</span><br/>
      </div>
      <h4>Timer Example</h4>
      <Timer />
    </div>
  );
}

export default App;
