import { useState } from 'react'
import { Product } from './products/Product'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Product/>
    </div>
  )
}

export default App
