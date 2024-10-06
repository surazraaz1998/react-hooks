import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, inc_amount, increment } from './store/CounterSlice';

const App = () => {
    const count=useSelector((state)=> state.counter.counterValue)
    const dispatch=useDispatch();
  return <>
  {count}<br/>
  <button onClick={()=>dispatch(increment())}>Increment</button>
  <button onClick={()=>dispatch(decrement())}>Decrement</button>
  <button onClick={()=>dispatch(inc_amount(10))}>Increment with Value</button>
  </>
}

export default App