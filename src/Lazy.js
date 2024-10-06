import React, { lazy, Suspense, useState } from 'react'
// import Text from './Text';


const Text=lazy(()=>delayForDemo(import('./Text')))

const Lazy = () => {
    const [showText,toggleText]=useState(false);


  return (
    <div>
        <button onClick={()=>toggleText(prev=>!prev)}>show text</button>
        {showText && <Suspense fallback={<div>Loading...</div>}><Text>Hi Suraj</Text></Suspense> }
    </div>
  )
}

export default Lazy;

function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }