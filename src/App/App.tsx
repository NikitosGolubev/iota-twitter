import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProviders from './components/AppProviders';
import { Routes } from './routes';

function App() {
  return (
    <AppProviders>
      <Router>
        <Routes />
      </Router>
    </AppProviders>
  );
}

export default App;
