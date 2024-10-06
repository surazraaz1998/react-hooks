import React from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom';


const App = () => {
  return <>
  <Link to="/">Home   </Link>
  <Link to="/about">About   </Link>
  <Link to="/contact">Contact   </Link>
  <Link to="/profile/suraj">Profile</Link><br/>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/profile/:username" element={<Profile />}/>
</Routes>
  </>
}
export default App;

function Home(){
return <>I am Home</>
}
function About(){
    return <>I am About</>
}
function Contact(){
    return <>I am Contact</>
}
function Profile(){
    const {username}=useParams()
    return <>Hello {username}</>
}
