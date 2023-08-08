
import Square from './Square'
import { useState } from 'react'

export default function Board() {
     const [squares, setSquares] = useState(Array(9).fill(null))
  return (<>
     <div>
          <Square />
          <Square />
          <Square />
     </div>
     <div>
          <Square />
          <Square />
          <Square />
     </div>
     <div>
          <Square />
          <Square />
          <Square />
     </div>
  </>
  )
}
