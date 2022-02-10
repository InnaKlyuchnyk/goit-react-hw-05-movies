import Navigation from './Navigation'
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeView from '../views/HomeView'
import SerchMovies from '../views/SerchMovies'
import OneMovieCard from '../views/OneMovieCard'
import ActorCard from '../views/ActiorCard'
import Reviews from '../views/Reviews'

export const App = () => {

  return(
  <>
      <Routes>
        <Route path='/' element={<Navigation />}>
      
          <Route index element={<HomeView />}/>
          <Route path='movies' element={<SerchMovies />} />
          
         
          <Route path='movies/:movieId' element={<OneMovieCard />} >
            
            <Route path='cast' element={<ActorCard />} />
            <Route path='reviews' element={<Reviews/> }/>
            
          </Route>
            
          
          <Route path='*' element={ <Navigate to='/'/>}/>
            
        </Route>
      </Routes>
      
  </>)
};
