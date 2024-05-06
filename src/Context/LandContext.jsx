import { createContext, useContext, useState } from 'react';

// Create a context for the Land application
export const LandContext = createContext(null);

// Define a provider component for the LandContext
const LandContextProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Default language

    // Define the context values
    const contextValues = {
        language,
        setLanguage,
    };

    // Return the context provider with the defined context values
    return (
        <LandContext.Provider value={contextValues}>
            {children}
        </LandContext.Provider>
    );
};

export default LandContextProvider;
