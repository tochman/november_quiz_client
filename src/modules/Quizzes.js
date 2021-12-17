import { api } from "./network";

const Quizzes = {
  async create({ category, difficulty }) {
    const { data } = await api.post("/quizzes", {
      params: {
        category: category,
        difficulty: difficulty,
      },
    });
    return data;
  },
};

export default Quizzes;
