import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Favorite from './page/Favorite';
import Navbar from './components/Navbar';
import { MovieProvider } from './contexts/MovieContext';
import "./css/App.css";

function App() {
  return (
    <MovieProvider>
      <div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Favorite' element={<Favorite />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;

