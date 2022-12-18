import axios, { AxiosRequestConfig } from "axios";
import { API_URL, WEATHER_API_URL } from "../constants";

interface ParamsWeather {
  latitude: number,
  longitude: number,
  timezone: string,
  current_weather: boolean,
}

class Api {
  public static async getAllArticles() {
    const url = `${API_URL}/articles`
    return await axios.get(url)
  }

  public static async getAllUsers() {
    const url = `${API_URL}/users`
    return await axios.get(url)
  }

  public static async getUser(id: number) {
    const url = `${API_URL}/users/${id}`
    return await axios.get(url)
  }

  public static async getWeather(lat: number,long: number) {
    const url = `${WEATHER_API_URL}`

    const params: ParamsWeather = {
      latitude: lat,
      longitude: long,
      timezone: 'Europe/Moscow',
      current_weather: true,
    }

    return await axios.get(url, {params})
  }

}

export default Api