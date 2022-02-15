import { lazy, Suspense } from 'react';
import Navigation from './Navigation'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const loadingPage = componentName => {
  return lazy(() => import(`../views/${componentName}`))
}
const HomeView = loadingPage('HomeView')
const SerchMovies = loadingPage('SerchMovies')
const OneMovieCard = loadingPage('OneMovieCard')
const ActorCard = loadingPage('ActorCard')
const Reviews = loadingPage('Reviews')

export const App = () => {

  return (
    <>
      <Suspense fallback='LOADING...'>
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
    </Suspense>
      <Toaster />
      </>
)
};
