import React from "react";
import { useDispatch } from "react-redux";
import { alphabet } from "../modules/alphabet";

const Question = ({ currentQuestion, question, incrementQuestion }) => {
  let answers = [...question.incorrect_answers, question.correct_answer];
  answers = answers.concat(answers.splice(0, 1));
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
  const answersList = answers.map((answer, answerIndex) => {
    return (
      <li
        onClick={(event) => clickHandler(event.target)}
        className="answer box"
        data-cy={`question-${currentQuestion}-${answerIndex}`}
        key={`question-${currentQuestion}-${answerIndex}`}
      >
        <p>
          <span>{alphabet[answerIndex]}</span> {answer}
        </p>
      </li>
    );
  });
  return (
    <>
      <div className="question box">
        <span>{currentQuestion + 1}.</span> {question.question}
      </div>
      <ul className="answers">{answersList}</ul>
    </>
  );
};

export default Question;
