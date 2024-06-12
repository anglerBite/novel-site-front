import React, { ReactNode, createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './css/styles.css';
import './css/custom.css';
import {Context} from "./types/types.ts";

const DefaultContext: Context = {
  toggleSwitch: () => {},
  bool: false,
  mode: 'Dark',
  novelUrl: 'http://localhost:3000/novel',
  loginUrl: 'http://localhost:3000/login',
}

const AppContext = createContext<Context>(DefaultContext);

const AppProvider = ({ children }: {children: ReactNode}) => {

  const [mode, setMode] = useState<string>('Dark');
  const [bool, setBool] = useState<boolean>(false);

  const novelUrl = import.meta.env.VITE_APP_NOVEL_URL;
  const loginUrl = import.meta.env.VITE_APP_LOGIN_URL;

  const toggleSwitch = () => {
    const newBool = !bool;
    setBool(newBool);
    setMode(newBool ? 'Light' : 'Dark')
  }

  return (
    <AppContext.Provider value={{ toggleSwitch, bool, mode, novelUrl, loginUrl }}>
      {children}
    </AppContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
)

export { AppContext };