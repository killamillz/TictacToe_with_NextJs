'use client'

import { useState } from "react"

type SquareTypes = {
     value: String
}

const  Square = () => {
     const [value, setValue] = useState('')

    const handleClick = () =>{
          setValue('X')
    }

  return (
     <>
          <button onClick={handleClick}>{value}</button>
     </>
  )
}

export default Square
