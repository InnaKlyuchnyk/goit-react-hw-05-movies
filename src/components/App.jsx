import Navigation from './Navigation'
import { Routes, Route } from 'react-router-dom';
import HomeView from '../views/HomeView'
import SerchMovies from '../views/SerchMovies'
import OneMovieCard from '../views/OneMovieCard'

export const App = () => {

  return(
  <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<HomeView />}/>
          <Route path='movies' element={<SerchMovies />} >
            <Route path=':movieId' element={<OneMovieCard/> }/>
          </Route>
        </Route>
      </Routes>
      
  </>)
};
