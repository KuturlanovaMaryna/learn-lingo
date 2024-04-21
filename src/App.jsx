import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage/HomePage';
import { TeachersPage } from './pages/TeachersPage/TeachersPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import { ToastContainer } from 'react-toastify';

function App() {
  console.log(import.meta.env);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1000} />
    </AppWrapper>
  );
}
export default App;
