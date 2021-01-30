import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyles from './styles/global';

import AppProvider from './contexts';

function App() {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
