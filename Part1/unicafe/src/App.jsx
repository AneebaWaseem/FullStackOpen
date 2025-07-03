import { useState } from 'react'
import Statistics from './components/Statistics'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleGood() {
    setGood(good + 1)
  }
  function handleBad() {
    setBad(bad + 1)
  }
  function handleNeutral() {
    setNeutral(neutral + 1)
  }
  

  return (
    <div>
    
    <div>
      <h1>Give Feedback</h1>

      <button onClick={handleGood}> Good </button>
      <button onClick={handleNeutral}> Neutral </button>
      <button onClick={handleBad}> Bad </button>
    </div>
  
    <div>
      <h1>Statistics</h1>
      {good || bad || neutral ? <Statistics good={good} bad={bad} neutral={neutral}/> : <p>No feedback gievn!</p>}
      
    </div>

    </div>
  )
}

export default App
