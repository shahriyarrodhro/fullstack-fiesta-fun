
import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: 'en' | 'bn';
  toggleLanguage: () => void;
  location: string;
  setLocation: (location: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false); // Default to light mode
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [location, setLocationState] = useState('Dhaka');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const theme: 'light' | 'dark' = darkMode ? 'dark' : 'light';

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  const setLocation = (newLocation: string) => {
    setLocationState(newLocation);
  };

  return (
    <AppContext.Provider value={{
      darkMode,
      toggleDarkMode,
      theme,
      toggleTheme,
      language,
      toggleLanguage,
      location,
      setLocation
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
