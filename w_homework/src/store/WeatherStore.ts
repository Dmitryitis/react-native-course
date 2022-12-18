import { makeAutoObservable } from "mobx";
import cityDataList from "../constants/cities";
import Api from "../api";
import { CityData } from "../components/weather/types";
import { AxiosResponse } from "axios";

class WeatherStore {

  cities:CityData[] = cityDataList
  selectedCity: CityData = cityDataList[0]

  currentData = {
    currentTemperature: 0,
    weathercode: -1
  }

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedCity = async (city: CityData) => {
    this.selectedCity = city;
    await this.loadWeatherData();
  }

  setCurrentData = (data:any) => {
    this.currentData = {
      currentTemperature: data.current_weather.temperature,
      weathercode: data.current_weather.weathercode
    }
  }

  loadWeatherData = async () => {
    try {
      const { data }: AxiosResponse = await Api.getWeather(this.selectedCity.lat, this.selectedCity.long)
      this.setCurrentData(data)
    } catch (e) {}
  }
}

export default new WeatherStore()