import React, { useState } from 'react'

const Difficultyselector = () => {
  const [difficulty, setDifficulty] = useState('')

  return (
    <div>
      <select
        value={difficulty}
        onChange={(select) => {
          const selectedDifficulty = select.target.value
          setDifficulty(selectedDifficulty)
        }}
      >
        <option value="">--please choose a difficulty--</option>
        <option value="easy">Easy</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  )
}
export default Difficultyselector
