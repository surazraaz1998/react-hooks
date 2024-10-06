import React, { useContext } from 'react'
import Button from '../Button'
import { ThemeContext } from './Context'
const Navbar = () => {
    const {theme,setTheme}=useContext(ThemeContext)
    function clickHandler(){
        setTheme(prev=> prev ==='dark' ? 'light':'dark')
    }
  return <>
  <span>Home </span>
  <span>About </span>
  <Button clickHandler={clickHandler}>{`Toggle Button ${theme}`}</Button>
  </>
}

export default Navbar