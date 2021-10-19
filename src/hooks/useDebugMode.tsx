import { createContext, FC, useContext, useState } from 'react';

interface IDebugModeContext {
  debug: boolean;
  changeMode: () => void;
}

const DebugModeContext = createContext<IDebugModeContext>({ debug: false, changeMode: () => {} });

export const DebugModeProvider: FC = ({ children }) => {
  const [debug, setMode] = useState<boolean>(false);

  const changeMode = () => setMode((prev) => !prev);

  return (
    <DebugModeContext.Provider value={{ debug, changeMode }}>{children}</DebugModeContext.Provider>
  );
};

export const useDebugMode = () => useContext(DebugModeContext);
