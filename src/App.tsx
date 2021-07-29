import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import './App.styles.scss';
import { ErrorBoundary } from './common/components';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
          <Routes />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
