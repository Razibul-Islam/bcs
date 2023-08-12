import { Route, Routes } from 'react-router-dom';
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
import Navbar from "./Pages/Global/Navbar";
import TopicForReadTopic from './Pages/Study/SubjectWise/TopicForReadTopic';
import Home from './Pages/Home';
import VideoRutine from './Pages/Study/Video/Rutine';
import VideoWeekly from './Pages/Study/Video/Weekly';
import VideoVideo from './Pages/Study/Video/Video';
import VideoRecent from './Pages/Study/Video/Recent';
import VideoEnglish from './Pages/Study/Video/English';
import VideoMath from './Pages/Study/Video/Math';
import VideoScience from './Pages/Study/Video/Science';
import VideoIct from './Pages/Study/Video/Ict';
import VideoInternational from './Pages/Study/Video/International';
import VideoBangladesh from './Pages/Study/Video/Bangladesh';
import VideoSuggetion from './Pages/Study/Video/Suggetion';
import PDFRutine from './Dashboard/PDFSection/PDFRutine';
import PdfWeekly from './Pages/Study/PDF/PdfWeekly';
import PdfRecent from './Pages/Study/PDF/PdfRecent';
import Pdf from './Pages/Study/PDF/Pdf';
import PdfEnglish from './Pages/Study/PDF/PdfEnglish';
import PdfMath from './Pages/Study/PDF/PdfMath';
import PdfScience from './Pages/Study/PDF/PdfScience';
import PdfIct from './Pages/Study/PDF/PdfIct';
import PdfInternational from './Pages/Study/PDF/PdfInternational';
import PdfBangladesh from './Pages/Study/PDF/PdfBangladesh';
import PdfSuggetion from './Pages/Study/PDF/PdfSuggetion';
import SubjectWise from './Pages/Study/SubjectWise/SubjectWise';
import Search from './Pages/Search/Search';
import CentralArchive from './Pages/CentralArchive/CentralArchive';
import CentralFavorite from './Pages/CentralFavorite/CentralFavorite';
import CentralResult from './Pages/CentralResult/CentralResult';
import QuizMaster from './Pages/QuizMaster/QuizMaster';
import WrongAndUnanswered from './Pages/WrongAndUnanswered/WrongAndUnanswered';
import SubjectWiseQuestion from './Pages/Study/SubjectWise/SubjectWiseQuestion';

function App() {

  return (
    <div className='bg-banner '>
      <Navbar />
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
          <Route path='/dashboard/read-topic-add' element={<TopicForReadTopic />}></Route>
        </Route>

        {/* Normal Route */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUP />}></Route>
        <Route path="/reset" element={<Reset />}></Route>
        {/* Video Segment Route */}
        <Route path="/video" element={<VideoVideo />} />
        <Route path="/video/videoroutine" element={<VideoRutine />} />
        <Route path="/video/videoweekly" element={<VideoWeekly />} />
        <Route path="/video/videorecent" element={<VideoRecent />} />
        <Route path="/video/videoenglish" element={<VideoEnglish />} />
        <Route path="/video/videomath" element={<VideoMath />} />
        <Route path="/video/videoscience" element={<VideoScience />} />
        <Route path="/video/videoict" element={<VideoIct />} />
        <Route path="/video/videointernational" element={<VideoInternational />}/>
        <Route path="/video/videobangladesh" element={<VideoBangladesh />} />
        <Route path="/video/videosuggestion" element={<VideoSuggetion />} />

        {/* Pdf Segment Route */}
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/pdf/pdfroutine" element={<PDFRutine />} />
        <Route path="/pdf/pdfweekly" element={<PdfWeekly />} />
        <Route path="/pdf/pdfrecent" element={<PdfRecent />} />
        <Route path="/pdf/pdfenglish" element={<PdfEnglish />} />
        <Route path="/pdf/pdfmath" element={<PdfMath />} />
        <Route path="/pdf/pdfscience" element={<PdfScience />} />
        <Route path="/pdf/pdfict" element={<PdfIct />} />
        <Route path="/pdf/pdfinternational" element={<PdfInternational />} />
        <Route path="/pdf/pdfbangladesh" element={<PdfBangladesh />} />
        <Route path="/pdf/pdfsuggestion" element={<PdfSuggetion />} />

        {/* Topic Job Solution segment Route */}

       
        <Route path="/subjectwise" element={<SubjectWise />} />

        {/* <=====================================Preminum Section ========================================> */}
        <Route path="/searchquestion" element={<Search />} />
        <Route path="/centralArchive" element={<CentralArchive />} />
        <Route path="/centralfavorite" element={<CentralFavorite />} />
        <Route path="/centralresult" element={<CentralResult />} />
        <Route path="/quizmaster" element={<QuizMaster />} />
        <Route path="/wrongandunanswered" element={<WrongAndUnanswered />} />


      {/* read Topicaly  */}
      <Route path="/subjectwise/:subject" element={<SubjectWiseQuestion />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
