import { api } from './network'

const Questions = {
  async create() {
    const { data } = await api.post('/questions', {
      questions: { category: category, difficulty: difficulty },
    })
    return data
  },
}

export default Questions
