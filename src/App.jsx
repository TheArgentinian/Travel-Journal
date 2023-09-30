import { useState } from 'react'
import './App.css'
import Places from '../components/Hero'
import data from './Data'
import Header from '../components/header'

function App() {
  const [count, setCount] = useState(0)
  const cards = data.map(item => {
    return (
        <Places
            key={item.id}
            {...item}
        />
    )
})
  return (
    <>
      <Header />
      {cards}
    </>
  )
}

export default App
