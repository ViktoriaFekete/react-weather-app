import axios from 'axios';
import {useState} from 'react';
import './controls.scss';
import { WeatherDataResponse } from './types';
import { API_KEY } from '../../../.secret/key';

export type WeatherDataType = {
  temperature: number;
  wind: number;
  pressure: number;
  humidity: number;
  name: string;
  icon: string;
}

const fetchWeatherData = async (city: string): Promise<WeatherDataType> => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  const data: WeatherDataResponse = response.data;
  
  const weather: WeatherDataType = {
    temperature: data.main.temp,
    wind: data.wind.speed,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    name: data.name,
    icon: data.weather[0].icon
  }

  return weather;
}

type ControlProps = {
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherDataType | null>>
}

function Controls({setWeatherData} : ControlProps) {

  // toto mozem nazvat hocijako, v podstate aj ten setter 
  const [city, setCity] = useState<string>("");
  
  // aj takto by sme mohli definovat => onChange={handleInputChange}
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  //   setCity(event.target.value);
  // }

  const handleGetWeather = () => {
    console.log(city);
    fetchWeatherData(city)
    .then((data) => {
      console.log(data);
      setWeatherData(data);
    })
    .catch(error => console.log(error));

  }

  return (
    <div className="controls">
      <input type="text" placeholder="Enter city name" value={city} onChange={({ target }) => setCity(target.value)}/>
      <button onClick={handleGetWeather}>Get weather</button>
    </div>
  );
}

export default Controls;