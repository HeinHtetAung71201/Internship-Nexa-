import React from 'react'

export const Container = ({children}) => {
  return (
    <div className=' w-[500px] mx-auto border my-4 h-[600px] overflow-hidden'>{children}</div>
  )
}
