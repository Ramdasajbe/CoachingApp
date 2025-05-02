// App.tsx
import React from 'react';
import { ThemeProvider } from './src/utils/themeContext';
import MainNavigator from './src/mainnavigator/MainNavigator';


const App = () => {
  return (
    <ThemeProvider>
      <MainNavigator/>
    </ThemeProvider>
  );
};

export default App;
