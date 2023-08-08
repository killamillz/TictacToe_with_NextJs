'use client'

import { useState } from "react"

type SquareTypes = {
     value: String | null,
     onSquareClick: () => void
}

const  Square = ({value, onSquareClick}: SquareTypes) => {


  return (
     <>
          <button>{value}</button>
     </>
  )
}

export default Square
