import React from 'react'

const Contain = ({className,children}) => {
  return (
    <div className={`md:w-[1250px] md:mx-auto p-6 ${className}`}>
      {children}
    </div>
  )
}

export default Contain