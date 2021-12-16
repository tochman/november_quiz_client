import axios from "axios";

const Questions = {
  async index({ category, difficulty }) {
    const { data } = await axios.get("https://opentdb.com/api.php", {
      params: {
        amount: 10,
        category: 23,
        difficulty: difficulty,
        type: "multiple",
      },
    });
    return data;
  },
};

export default Questions;
