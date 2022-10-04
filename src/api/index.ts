import axios from "axios";
import { API_URL } from "src/constants";

class Api {
  public static getAllPosts() {
    const url = `${API_URL}/posts`
    return axios.get(url)
  }
}

export default Api