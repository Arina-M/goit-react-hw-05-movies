import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from 'react';
import GlobalStyles from './GlobalStyles';
import { MovieApp } from './App.styled';
import Header from './Header/Header';
import Home from 'pages/Home';
import { Routes, Route, Navigate} from 'react-router-dom';

const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export default function App() {


  return (
    <MovieApp>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <GlobalStyles />
      <ToastContainer autoClose={2000} />
    </MovieApp>
  );
}
