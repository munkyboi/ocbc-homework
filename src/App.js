import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// PAGES
import { HomePage } from './Pages'

// STYLES
import { AppContainer } from './AppStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 10,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router>
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </Router>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
