
import './App.scss';
import { lazy } from 'react';

const HomePage = lazy(() => import( "./pages/HomePage"));

function App() {
  return (
    <div className="App">
   <HomePage/>
    </div>
  );
}

export default App;
