import { useState } from 'react'
import './App.css'
import Parent from './Components/Parent/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Parent/>
    </>
  )
}

export default App
