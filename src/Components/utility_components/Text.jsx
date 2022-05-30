import React from 'react'

function Text({_className, children}) {
  return (
    <div className={_className}>{children}</div>
  )
}

export default Text;