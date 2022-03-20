import "./App.css";
import Container from "./components/Container";
import { BackgroundProvider } from "./contexts/BackgroundContext";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <BackgroundProvider>
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </BackgroundProvider>
  );
}

export default App;
