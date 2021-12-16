import React, { useState } from "react";

const DifficultySelector = () => {
  const [difficulty, setDifficulty] = useState("");

  return (
    <div data-cy="quiz-difficulty">
      <select
        data-cy="difficulty"
        value={difficulty}
        onChange={(select) => {
          const selectedDifficulty = select.target.value;
          setDifficulty(selectedDifficulty);
        }}
      >
        <option value="">--please choose a difficulty--</option>
        <option value="easy">Easy</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};
export default DifficultySelector;
