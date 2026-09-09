import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './page/Home';
import Favorite from './page/Favorite';
function App() {
return (
  <main className="main-content">
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Favorite' element={< Favorite/>}/>
  </Routes>
  </main>
  )
}

export default App
