import React from 'react'
import Questions from './modules/Questions'
import Quizselector from './components/Categoryselector'
import Difficultyselector from './components/Difficultyselector'

const App = () => {
  return (
    <>
      <div data-cy="question-array">
        <Quizselector />
        <Difficultyselector />
        <button data-cy="start-button">Start Quiz</button>
      </div>
    </>
  )
}

export default App
