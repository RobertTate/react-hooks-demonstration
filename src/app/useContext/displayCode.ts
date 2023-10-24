const displayCode = 
`import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const styles = {
    light: {
      backgroundColor: 'white',
      color: 'black',
    },
    dark: {
      backgroundColor: 'black',
      color: 'white',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={styles[theme]}>
        <ThemeToggler />
      </div>
    </ThemeContext.Provider>
  );
};

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  ) 
};
`

export default displayCode;
