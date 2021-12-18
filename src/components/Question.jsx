import React from "react";
import { useDispatch } from "react-redux";

const Question = ({ currentQuestion, question, incrementQuestion }) => {
  let answers = [...question.incorrect_answers, question.correct_answer];
  const dispatch = useDispatch();
  const clickHandler = (selector) => {
    dispatch({
      type: "SUBMIT_ANSWER",
      payload: {
        index: currentQuestion,
        submittedAnswer: selector.textContent,
        correctAnswer: question.correct_answer,
      },
    });
    incrementQuestion(currentQuestion + 1);
  };
  return (
    <div className="answer box">
      <span>{currentQuestion + 1}.</span> {question.question}
      <ul className="answers">
        {answers.map((answer, answerIndex) => {
          return (
            <li
              data-cy={`question-${currentQuestion}-${answerIndex}`}
              onClick={(event) => clickHandler(event.target)}
              className="answer box"
              key={`question-${currentQuestion}-${answerIndex}`}
            >
              {answer}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
