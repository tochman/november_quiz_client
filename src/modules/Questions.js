import axios from 'axios'
import { api } from './network'

const Questions = {
  async index() {
    const { data } = await axios.get(
      'https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple',
      
    )
    return data
  },
}

// const Questions = {
//   async create() {
//     const { data } = await api.post('/questions', {
//       questions: { category: category, difficulty: difficulty },
//     })
//     return data
//   },
// }

export default Questions
