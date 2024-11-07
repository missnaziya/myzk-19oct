// *********************
// Role of the component: Simple H2 heading component
// Name of the component: Heading.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Heading title={title} />
// Input parameters: { title: string }
// Output: h2 heading title with some styles 
// *********************

import React from 'react'

const Heading = ({ title } : { title: string }) => {
  return (
    <h4 className=" text-4xl font-extrabold text-center mt-20 max-lg:text-5xl bg-gradient-to-r from-black via-[#ea580c] to-[#ea580c] bg-clip-text text-transparent"> 
   { title }</h4>
  )
}

export default Heading