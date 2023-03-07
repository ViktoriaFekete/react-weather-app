import './App.scss'
import { AdditionalData } from './components/AdditionalData'
import { Controls } from './components/Controls'
import { Header } from './components/Header'
import { WeatherData } from './components/WeatherData'
import { useState } from 'react'
import type { WeatherDataType } from './components/Controls'
import { WidgetProps } from './components/AdditionalData/Widget'

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);

  const data: WidgetProps[] = [
    {
        value: weatherData?.humidity || 50,
        unit: "%",
        text: "humidity"
    },
    {
        value: weatherData?.wind || 10,
        unit: "km/h",
        text: "wind speed"
    },
    {
        value: weatherData?.pressure || 1010,
        unit: "kPA",
        text: "pressure"
    }
]

  return (
    <div className="App">
      <Header title={ weatherData?.name || "City was not set"}/>
      <Controls setWeatherData={setWeatherData}/>
      <WeatherData/>
      <AdditionalData data={data}/>
    </div>
  )
}

export default App
