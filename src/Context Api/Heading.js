import React from 'react'
import Text from '../Text'
const Heading = (props) => {
    const {headingText}=props
  return <>
  Hey I am Heading Component
  <Text externalData={headingText}>Hey I am Text Component</Text>
  </>
}

export default Heading