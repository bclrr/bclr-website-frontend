import { useState } from 'react'
import './App.css'

export default function App() {
const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <div className="block p-4">
          <h1 className="text-3xl font-bold underline">Test de tailwind</h1>
        </div>
        <div className="block  p-4">
          <button className="bg-green-500" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

