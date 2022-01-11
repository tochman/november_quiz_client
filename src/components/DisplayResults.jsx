import React from "react";
import { useDispatch } from "react-redux";

const DisplayResults = ({ results }) => {
  const dispatch = useDispatch();
  return (
    <div className="quiz-container">
      <div className="question box">Your results:</div>
      <ul className="answers">
        <li className="answer box">
          <p>Total questions: {results.totalAnswers}</p>
        </li>
        <li className="answer box">
          <p>Correct answers: {results.correctAnswers}</p>
        </li>
        <li className="answer box">
          <p>Percantage: {(results.percentCorrect * 100).toFixed(2) + "%"}</p>
        </li>
      </ul>
      <button
        className="box"
        data-cy="submit-quiz"
        onClick={() => dispatch({type: 'RESET_RESULTS'})}
      >
        Return to Quiz <span>&#x203A;</span>{" "}
      </button>
    </div>
  );
};

export default DisplayResults;
