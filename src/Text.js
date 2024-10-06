import React from 'react'

const Text = (props) => {
    const {children,externalData}=props;
  return <>
    <div>{children}</div>
    <div>{externalData}</div>
  </>
}

export default Text