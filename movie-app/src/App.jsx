import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter> 
      <div className='app'>
        <h1>Movie Search</h1>
        <Routes>
          <Route path="/" element={<MovieSearch />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
