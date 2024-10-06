import React, { useState } from 'react'
// import Heading from './Heading';
import { ThemeContext } from './Context'
import Navbar from './Navbar'

const App = () => {
    const [theme,setTheme]=useState("dark")
  return <ThemeContext.Provider value={{theme,setTheme}}>
    <Navbar />
  </ThemeContext.Provider>
}

export default App