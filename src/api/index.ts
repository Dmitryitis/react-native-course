import axios from "axios";
import { API_URL } from "src/constants";

class Api {
  public static async getAllArticles() {
    const url = `${API_URL}/articles`
    return await axios.get(url)
  }
}

export default Api