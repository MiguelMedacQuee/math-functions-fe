import { useState } from 'react'
import guapo1 from './assets/zeni.svg'
import guapo2 from './assets/migui.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>To learn and grow</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={guapo1} className="logo" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={guapo2} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>King + Kona</h1>
      {/* <AxisComponent /> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
      onde tan los tios 
      </p>
    </>
  )
}

export default App
