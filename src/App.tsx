import './App.scss'
import AdditionalData from './components/AdditionalData/AdditionalData'
import Controls from './components/Controls/Controls'
import Header from './components/Header/Header'
import WeatherData from './components/WeatherData/WeatherData'

function App() {
  
  return (
    <div className="App">
      <Header title="Bratislava, Region of Bratislava | Slovakia"/>
      <Controls/>
      <WeatherData/>
      <AdditionalData/>
    </div>
  )
}

export default App
