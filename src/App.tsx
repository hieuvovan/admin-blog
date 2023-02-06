import { Suspense } from 'react';
import { RouterOutlet } from './routes/RouterOutlet';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import appRoutes from './routes/appRoutes';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>... Loading</div>}>
        <RouterOutlet routes={appRoutes} />
      </Suspense>
    </Router>
  );
}

export default App;
