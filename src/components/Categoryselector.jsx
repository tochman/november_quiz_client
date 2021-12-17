import React from "react";

const CategorySelector = ({ onCategoryChange }) => {
  return (
    <div>
      <select
        data-cy="category"
        onChange={(select) => {
          onCategoryChange(select.target.value);
        }}
      >
        <option value="" selected disabled hidden>
          --please choose a category--
        </option>
        <option value="history">History</option>
        <option value="science">Science</option>
        <option value="art">Art</option>
        <option value="computers">Computers</option>
        <option value="nature">Nature</option>
      </select>
    </div>
  );
};

export default CategorySelector;
