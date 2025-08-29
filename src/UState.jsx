import { useState } from "react"

const UState = () => {
const [count, setCount] = useState(0)

function incCount(){
    setCount(count+1)
}

function decCount(){
    setCount(count-1)
}

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incCount}>+ inc</button>
      <button onClick={decCount}>- dec</button>
    </div>
  )
}

export default UState
