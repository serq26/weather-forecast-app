import { createContext, useContext, useState} from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [ city, setCity] = useState("Eskişehir");

    const values = { city, setCity };

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);