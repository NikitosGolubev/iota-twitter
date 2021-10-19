import { AppThemeProvider, DebugModeProvider } from '@hooks/index';
import { FC } from 'react';

const AppProviders: FC = ({ children }) => {
  return (
    <AppThemeProvider>
      <DebugModeProvider>{children}</DebugModeProvider>
    </AppThemeProvider>
  );
};

export default AppProviders;
