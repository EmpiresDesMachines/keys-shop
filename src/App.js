import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Shop } from './components/Shop';
import { Warning } from './components/Warning';

import { ContextProvider } from './context';

function App() {
  const [isWarning, setWarning] = React.useState(true);

  const removeWarning = () => {
    localStorage.setItem('warning', true);
    setWarning(false);
  };

  React.useEffect(() => {
    if (localStorage.getItem('warning')) {
      setWarning(false);
    }
  }, []);

  return (
    <>
      {isWarning ? (
        <Warning removeWarning={removeWarning} isWarning={isWarning} />
      ) : (
        <>
          <Header />
          <ContextProvider>
            <Shop />
          </ContextProvider>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
