import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Global/Navbar';
import Home from './Pages/Home';
import Login from './Auth/Login';
import SignUP from './Auth/SignUp';
import Reset from './Auth/Reset';

function App() {
  return (
    <div className='bg-banner '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/sign-up' element={<SignUP/>}></Route>
        <Route path='/reset' element={<Reset/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
