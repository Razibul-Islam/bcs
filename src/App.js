import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Global/Navbar';
import Home from './Pages/Home';
import Login from './Auth/Login';
import SignUP from './Auth/SignUp';
import Reset from './Auth/Reset';
import Contact from './Pages/FrontEnd/Contact';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FreeModelTest from './Pages/FrontEnd/FreeModelTest';
import BCSForNew from './Pages/FrontEnd/BCSForNew';
import DalyQuiz from './Pages/FrontEnd/DalyQuiz';
import BCSForNewAllSyllbus from './Pages/FrontEnd/BCSForNewAllSyllbus';
import BcsForExprienced from './Pages/BcsForExprienced/BcsForExprienced';
import FreeWeaklyModelTestForExprienced from './Pages/BcsForExprienced/FreeWeaklyModelTestForExprienced';
import ExpriencedSubjectMixPrepratioinOneFourty from './Pages/BcsForExprienced/ExpriencedSubjectMixPrepratioinOneFourty';

function App() {
  return (
    <div className='bg-banner '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/sign-up' element={<SignUP/>}></Route>
        <Route path='/reset' element={<Reset/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/free-weakly-model-test' element={<FreeModelTest/>}></Route>
        <Route path='/bcs-for-new' element={<BCSForNew/>}></Route>
        <Route path='/daily-quiz' element={<DalyQuiz/>}></Route>
        <Route path='/BCS-For-New-All-Syllbus' element={<BCSForNewAllSyllbus/>}></Route>
        <Route path='/bcs-for-exprienced' element={<BcsForExprienced/>}></Route>
        <Route path='/FreeWeaklyModelTestForExprienced' element={<FreeWeaklyModelTestForExprienced/>}></Route>
        <Route path='/ExpriencedSubjectMixPrepratioinOneFourty' element={<ExpriencedSubjectMixPrepratioinOneFourty/>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
