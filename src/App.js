import React, {useState} from 'react';
import { ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './config/theme';

import Header from './components/Header';


const App = () => {
  const Button = () => <button onClick={themeToggler}>Hola</button>
  const [theme, setTheme] = useState('light')

  const themeToggler = () => theme === 'light' ? setTheme('dark') : setTheme('light')

  
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Header/>
        <Button/>
      </ThemeProvider>
    </>
  );
}

export default App;
