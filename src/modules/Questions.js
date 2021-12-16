import axios from 'axios'
import { api } from './network'

// const Questions = {
//   async index() {
//     const { data } = await axios.get(
//       'https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple',
//     )
//     return data
//   },
// }

const Questions = {
  async index() {
    const { data } = await axios.get(
      'https://opentdb.com/api', 
      {
      params: 
      {amount: 10, 
      category: 23, 
      difficulty: "hard", 
      type: "multiple"}
      })
    return data
  },
}

export default Questions
