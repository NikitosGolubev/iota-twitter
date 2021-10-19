import '@assets/styles/main.scss';
import 'antd/dist/antd.min.css';
import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import AppProviders from './components/AppProviders';
import { Routes } from './routes';

const App: FC = () => {
  return (
    <AppProviders>
      <AppWrapper className="app">
        <Router>
          <Routes />
        </Router>
      </AppWrapper>
    </AppProviders>
  );
};

const AppWrapper = styled.div`
  background: var(--app-bg-color);
  min-height: 100vh;
`;

export default App;
