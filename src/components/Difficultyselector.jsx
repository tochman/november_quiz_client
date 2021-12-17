import React from "react";

const DifficultySelector = ({ onDifficultyChange }) => {
  return (
    <div>
      <select
        data-cy="difficulty"
        onChange={(select) => {
          onDifficultyChange(select.target.value);
        }}
      >
        <option value="" selected disabled hidden>
          --please choose a difficulty--
        </option>
        <option value="easy">Easy</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};
export default DifficultySelector;
