'use client'

import { useState } from "react"

type SquareTypes = {
     value: String | null
}

const  Square = ({value}: SquareTypes) => {


  return (
     <>
          <button onClick={handleClick}>{value}</button>
     </>
  )
}

export default Square
