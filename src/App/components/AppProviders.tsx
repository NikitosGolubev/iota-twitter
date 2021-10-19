import { DebugModeProvider } from '@hooks/index';
import { FC } from 'react';

const AppProviders: FC = ({ children }) => {
  return <DebugModeProvider>{children}</DebugModeProvider>;
};

export default AppProviders;
