import React from 'react';
import { ThemeProvider } from 'emotion-theming'

function App() {
  return (
    <ThemeProvider theme={{}}>
      Hello neighbor!
    </ThemeProvider>
  );
}

export default App;
