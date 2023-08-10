import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import SignUP from './Auth/SignUp';
import Reset from './Auth/Reset';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard/Dashboard';
import VideoSection from './Dashboard/VideoSection.jsx/VideoSection';
import VideoDRutin from './Dashboard/VideoSection.jsx/Rutin';
import PDFDPDFSection from './Dashboard/PDFSection/PDFSection';
import PDFDPDFRutine from './Dashboard/PDFSection/PDFRutine';
import JobSulationTopic from './Dashboard/JobSulationTopic/JobSulationTopic';
import PastJobsQuestion from './Dashboard/PastJobsQuestion/PastJobsQuestion';
import ReadTopicaly from './Dashboard/ReadTopicaly/ReadTopicaly';
import BCSPastQuestion from './Dashboard/BCSPastQuestion/BCSPastQuestion';

function App() {

  return (
    <div className='bg-banner '>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/sign-up' element={<SignUP />}></Route>
        <Route path='/reset' element={<Reset />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard/video-section' element={<VideoSection />}></Route>
          <Route path='/dashboard/video-section/rutin' element={<VideoDRutin />}></Route>
          <Route path='/dashboard/pdf-section' element={<PDFDPDFSection />}></Route>
          <Route path='/dashboard/pdf-section/rutin' element={<PDFDPDFRutine />}></Route>
          <Route path='/dashboard/job-solution-topically' element={<JobSulationTopic />}></Route>
          <Route path='/dashboard/past-jobs-question' element={<PastJobsQuestion />}></Route>
          <Route path='/dashboard/read-topicaly' element={<ReadTopicaly />}></Route>
          <Route path='/dashboard/past-bcs-question' element={<BCSPastQuestion />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
