import { DEFAULT_APP_THEME } from '@config/general';
import type { AppTheme } from '@typings/general';
import { createContext, FC, useContext, useState } from 'react';

interface IAppThemeContext {
  theme: AppTheme;
  changeTheme: (theme: AppTheme) => void;
}

const AppThemeContext = createContext<IAppThemeContext>({
  theme: DEFAULT_APP_THEME,
  changeTheme: () => {},
});

export const AppThemeProvider: FC = ({ children }) => {
  const [theme, changeTheme] = useState<AppTheme>(DEFAULT_APP_THEME);

  return (
    <AppThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={`app-${theme}-theme`}>{children}</div>
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(AppThemeContext);
