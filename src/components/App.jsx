import Navigation from './Navigation'
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeView from '../views/HomeView'
import SerchMovies from '../views/SerchMovies'
import OneMovieCard from '../views/OneMovieCard'

export const App = () => {

  return(
  <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<HomeView />}/>
          <Route path='movies' element={<SerchMovies />} />
          <Route path='movies/:movieId' element={<OneMovieCard />} />
          <Route path='*' element={ <Navigate to='/'/>}/>
            
          
        </Route>
      </Routes>
      
  </>)
};
