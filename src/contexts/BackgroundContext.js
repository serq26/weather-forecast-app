import { createContext, useContext, useState} from 'react';

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
    const [ background, setBackground] = useState("clear");

    const values = { background, setBackground };

    return <BackgroundContext.Provider value={values}>{children}</BackgroundContext.Provider>
}

export const useBackground = () => useContext(BackgroundContext);