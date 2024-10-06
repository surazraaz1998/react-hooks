import React, { memo } from 'react'

const Button = memo((props) => {
  const {children, clickHandler}=props;
  console.log("Button Component Mounted")
  return (
    <button onClick={clickHandler}>{children}</button>
  )
});

export default Button

//{} {} false