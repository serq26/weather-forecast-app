import "./App.css";
import Container from "./components/Container";
import { BackgroundProvider } from "./contexts/BackgroundContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <ThemeProvider>
      <BackgroundProvider>
        <WeatherProvider>
          <Container />
        </WeatherProvider>
      </BackgroundProvider>
    </ThemeProvider>
  );
}

export default App;
