import { useState } from 'react'
import { ProductForm } from './components/products/ProductForm'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ProductForm/>
    </div>
  )
}

export default App
