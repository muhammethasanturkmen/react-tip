import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
    <div className="content">
      <div className="left">
        <div className="header">
          <p>Bill</p>
          <input class="bahsis-gir" type="number"/>
        </div>
        <div className="select">
          <p>Select Tip %</p>
          <div className="select-button">
          <button>5</button>
          <button>10</button>
          <button>15</button>
          <button>25</button>
          <button>50</button>
          <input class="button-input" type="number"/>  
          </div>
        </div>
        <div className="people">
          <p>Number of People</p>
          <input class="kisi-sayisi" type="number"/>
        </div>
      </div>
      <div className="right">
        <h3 className="sadaka">Tip:</h3>
        <h3 className="sonuc">Total:</h3>
        <button>RESET</button>
      </div>
    </div>
  </div>
  )
}

export default App
