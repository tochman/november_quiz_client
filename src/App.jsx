import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateQuizForm from "./components/CreateQuizForm";
import DisplayResults from "./components/DisplayResults";
import Question from "./components/Question";
import Quizzes from "./modules/Quizzes";


const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { quiz, submissions, results } = useSelector((state) => state);
  const dispatch = useDispatch();
  let questionUI;
  if (quiz.questions) {
    let question = quiz.questions[currentQuestion];
    questionUI =
      currentQuestion >= quiz.questions.length ? (
        <div className="question box">
          <h1 style={{ color: "white" }}>You are done!</h1>
        </div>
      ) : (
        <Question
          currentQuestion={currentQuestion}
          question={question}
          incrementQuestion={setCurrentQuestion}
        />
      );
  }

  return (
    <>
      {results ? (
        <DisplayResults results={results} />
      ) : (
        <>
          {!quiz.questions ? (
            <CreateQuizForm />
          ) : (
            <div data-cy="quiz-list" className="quiz-container">
              {questionUI}
              {submissions.length > 0 && (
                <button
                  className="box"
                  data-cy="submit-quiz"
                  onClick={() => dispatch(Quizzes.submit())}
                >
                  Submit Quiz <span>&#x203A;</span>{" "}
                </button>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default App;
