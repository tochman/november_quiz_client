import React from 'react'
import Questions from './modules/Questions'
import Quizselector from './components/Categoryselector'
import Difficultyselector from './components/Difficultyselector'

const App = () => {
  return (
    <>
      <div data-cy="quiz-selector">
        <Quizselector />
      </div>
      <div data-cy="quiz-difficulty">
        <Difficultyselector />
      </div>
      <button data-cy="start-button">Start Quiz</button>
    </>
  )
}

export default App
