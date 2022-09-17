import { useState } from 'react'
import './App.css'
import { data } from "./utils/data.js"
import { colors } from "./utils/colors.js"

//components
import Card from './components/Card'


function App() {

  function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)]
  }

  let randomQuote = getRandom(data)
  let randomColor = getRandom(colors)

  const [quote, setQuote] = useState(randomQuote)
  const [color, setColor] = useState(randomColor)

  function handleChange() {
    setQuote(getRandom(data))
    setColor(getRandom(colors))
  }

  return (
    <div className="App" style={{backgroundColor: color}}>
      <Card 
        quotePicked = {quote}
        colorPicked = {color}
        pickAgain = {handleChange}
      />
    </div>
  )
}

export default App
