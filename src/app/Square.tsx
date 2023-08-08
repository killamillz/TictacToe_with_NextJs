import React from 'react'

type SquareTypes = {
     value: String
}

const  Square = ({value}: SquareTypes) => {
    const handleClick = () =>{
          console.log("I was clicked")
    }

  return (
     <>
          <button onClick={handleClick}>{value}</button>
     </>
  )
}

export default Square
