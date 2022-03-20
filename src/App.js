import "./App.css";
import Dropdown from "./components/Dropdown";
import Weather from "./components/Weather";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Dropdown />
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
