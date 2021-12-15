import { api } from './network'

const Questions = {
  async quiz() {
    const { data } = await api.post('/questions', {
    quiz: { trivia_categories_name: trivia_categories_name }
    })
    return data.questions
  },
}

export default Questions
