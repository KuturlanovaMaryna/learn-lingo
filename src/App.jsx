import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from 'pages/FirstPage/FirstPage';
import SecondPage from 'pages/SecondPage/SecondPage';
import HalfPage from 'pages/HalfPage/HalfPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import { ToastContainer } from 'react-toastify';
import { SignUp } from './components/Auth/SignUp';
import { SignIn } from './components/Auth/SignIn';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/first" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </AppWrapper>
  );
}
export default App;