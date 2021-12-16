import React, { useState, useEffect } from 'react'
import Questions from './modules/Questions'
import Quizselector from './components/Categoryselector'
import Difficultyselector from './components/Difficultyselector'

const App = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    Questions.index().then((data) => {
      debugger
      setQuestions(data.results)
    })
  }, [])

const qList = questions.map((question) => {
  return ( <li key={question.category}>{question.question}</li> 
    )
})


  return (
    <>
      <div data-cy="quiz-selector">
        <Quizselector />
      </div>
       <div data-cy="quiz-difficulty">
        <Difficultyselector />
      </div>
      
      <button data-cy="start-button">Start Quiz</button>
      <div data-cy="question-list">{qList}</div>
    </>
  )
}

export default App
