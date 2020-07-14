import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import HomeContainer from '../home';

import theme from '../../../theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomeContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
