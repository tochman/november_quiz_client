import React, { useState } from "react";
import Questions from "./modules/Questions";
import CategorySelector from "./components/Categoryselector";
import DifficultySelector from "./components/Difficultyselector";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState();

  const startQuiz = async () => {
    const data = await Questions.index({
      category: category,
      difficulty: difficulty,
    });
    setQuestions(data.results);
  };

  return (
    <>
      <CategorySelector onCategoryChange={setCategory} />
      <DifficultySelector onDifficultyChange={setDifficulty} />
      <button data-cy="start-button" onClick={startQuiz}>
        Start Quiz
      </button>
    </>
  );
};

export default App;
