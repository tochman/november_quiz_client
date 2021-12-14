import { api } from './network'

const Questions = {
  async index() {
    const { data } = await api.get('/questions')
    return data.questions
  },
}

export default Questions
