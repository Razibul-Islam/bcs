import { Route, Routes } from 'react-router-dom';
// import './App.css';
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
import FreeModelTest from "./Pages/FrontEnd/FreeModelTest";
import BCSForNew from "./Pages/FrontEnd/BCSForNew";
import DalyQuiz from "./Pages/FrontEnd/DalyQuiz";
import BCSForNewAllSyllbus from "./Pages/FrontEnd/BCSForNewAllSyllbus";
import BcsForExprienced from "./Pages/BcsForExprienced/BcsForExprienced";
import FreeWeaklyModelTestForExprienced from "./Pages/BcsForExprienced/FreeWeaklyModelTestForExprienced";
import ExpriencedSubjectMixPrepratioinOneFourty from "./Pages/BcsForExprienced/ExpriencedSubjectMixPrepratioinOneFourty";
import Home from "./Pages/FrontEnd/Home/Home";
import Video from "./Pages/FrontEnd/Home/Home/Study/Video/Video";
import VideoRutine from "./Pages/FrontEnd/Home/Home/Study/Video/Rutine";
import VideoWeekly from "./Pages/FrontEnd/Home/Home/Study/Video/Weekly";
import VideoRecent from "./Pages/FrontEnd/Home/Home/Study/Video/Recent";
import VideoEnglish from "./Pages/FrontEnd/Home/Home/Study/Video/English";
import VideoMath from "./Pages/FrontEnd/Home/Home/Study/Video/Math";
import VideoScience from "./Pages/FrontEnd/Home/Home/Study/Video/Science";
import VideoIct from "./Pages/FrontEnd/Home/Home/Study/Video/Ict";
import VideoInternational from "./Pages/FrontEnd/Home/Home/Study/Video/International";
import VideoBangladesh from "./Pages/FrontEnd/Home/Home/Study/Video/Bangladesh";
import VideoSuggetion from "./Pages/FrontEnd/Home/Home/Study/Video/Suggetion";
import PdfRutine from "./Pages/FrontEnd/Home/Home/Study/PDF/PdfRutine";
import PdfWeekly from "./Pages/FrontEnd/Home/Home/Study/PDF/PdfWeekly";
import PdfRecent from "./Pages/FrontEnd/Home/Home/Study/PDF/PdfRecent";
import PdfEnglish from "./Pages/FrontEnd/Home/Home/Study/PDF/PdfEnglish";
import PdfMath from "./Pages/FrontEnd/Home/Home/Study/PDF/PdfMath";
import PdfScience from "./Pages/FrontEnd/Home/Home/Study/PDF/PdfScience";
import PdfIct from "./Pages/FrontEnd/Home/Home/Study/PDF/PdfIct";
import PdfInternational from "./Pages/FrontEnd/Home/Home/Study/PDF/PdfInternational";
import PdfBangladesh from "./Pages/FrontEnd/Home/Home/Study/PDF/PdfBangladesh";
import PdfSuggetion from "./Pages/FrontEnd/Home/Home/Study/PDF/PdfSuggetion";
import Pdf from "./Pages/FrontEnd/Home/Home/Study/PDF/Pdf";
import Job from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/Job";
import BengaliLiterature from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/BengaliLiterature/BengaliLiterature";
import BengaliLiteratureInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/BengaliLiterature/BengaliLiteratureInner/BengaliLiteratureInner";
import BanglaGrammer from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/BanglaGrammer/BanglaGrammer";
import JobEnglish from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/English/JobEnglish";
import EnglishLanguage from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/EnglishLanguage/EnglishLanguage";
import BangladeshiMatters from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/Bangladeshimatters/BangladeshiMatters";
import InternationalMatters from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/InternationMatters/InternationalMatters";
import Geography from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/Geography/Geography";
import Governance from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/Governance/Governance";
import BasicScience from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/BasicScience/BasicScience";
import Computer from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/Computer/Computer";
import Basicmath from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/Basicmath/Basicmath";
import MentalSkills from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/MentalSkills/MentalSkills";
import BankMath from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/BankMath/BankMath";
import Bankenglish from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/Bankenglish/Bankenglish";
import BankScience from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/BankScience/BankScience";
import BankAffir from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/BankAffir/BankAffir";
import BankInternationalAffirs from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/BankInternaltionalAffir/BankInternationalAffirs";
import NationalAndInterNational from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/NationalAndInterNational/NationalAndInterNational";
import VariableData from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/VariableData/VariableData";
import Jobsulation from "./Pages/FrontEnd/Home/Home/Study/JobsulationPast/Jobsulationpast";
import LastBCS from "./Pages/FrontEnd/Home/Home/Study/LastBCS/LastBCS";
import SubjectWise from "./Pages/FrontEnd/Home/Home/Study/SubjectWise/SubjectWise";
import Search from "./Pages/FrontEnd/Home/Home/Premium/Search/Search";
import CentralArchive from "./Pages/FrontEnd/Home/Home/Premium/CentralArchive/CentralArchive";
import CentralFavorite from "./Pages/FrontEnd/Home/Home/Premium/CentralFavorite/CentralFavorite";
import CentralResult from "./Pages/FrontEnd/Home/Home/Premium/CentralResult/CentralResult";
import QuizMaster from "./Pages/FrontEnd/Home/Home/Premium/QuizMaster/QuizMaster";
import WrongAndUnanswered from "./Pages/FrontEnd/Home/Home/Premium/WrongAndUnanswered/WrongAndUnanswered";
import BanglaGrammerInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/BanglaGrammer/BanglaGrammerInner";
import JobEnglishInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/English/JobEnglishInner";
import EnglishLanguageInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/EnglishLanguage/EnglishLanguageInner";
import BangladeshiMattersInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/Bangladeshimatters/BangladeshiMattersInner";
import InternationalMattersInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/InternationMatters/InternationalMattersInner";
import GeoGraphyInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/Geography/GeoGraphyInner";
import GovernanceInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/Governance/GovernanceInner";
import BasicScienceInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/BasicScience/BasicScienceInner";
import ComputerInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/Computer/ComputerInner";
import BasicmathInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/Basicmath/BasicmathInner";
import MentalSkillsInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/MentalSkills/MentalSkillsInner";
import BankMathInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/BankMath/BankMathInner";
import BankenglishInner from "./Pages/FrontEnd/Home/Home/Study/JobSulationTopic/Bankenglish/BankenglishInner";
import Contact from './Pages/FrontEnd/Contact';
import SubBanglaMetters from "./Pages/FrontEnd/Home/Home/Study/SubjectWise/Bangladeshimatters/SubBangladeshiMatters";

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
        </Route>

        {/* Normal Route */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUP />}></Route>
        <Route path="/reset" element={<Reset />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/free-weakly-model-test"
          element={<FreeModelTest />}
        ></Route>
        <Route path="/bcs-for-new" element={<BCSForNew />}></Route>
        <Route path="/daily-quiz" element={<DalyQuiz />}></Route>
        <Route
          path="/BCS-For-New-All-Syllbus"
          element={<BCSForNewAllSyllbus />}
        ></Route>
        <Route
          path="/bcs-for-exprienced"
          element={<BcsForExprienced />}
        ></Route>
        <Route
          path="/FreeWeaklyModelTestForExprienced"
          element={<FreeWeaklyModelTestForExprienced />}
        ></Route>
        <Route
          path="/ExpriencedSubjectMixPrepratioinOneFourty"
          element={<ExpriencedSubjectMixPrepratioinOneFourty />}
        ></Route>

        {/* Video Segment Route */}
        <Route path="/video" element={<Video />} />
        <Route path="/video/videoroutine" element={<VideoRutine />} />
        <Route path="/video/videoweekly" element={<VideoWeekly />} />
        <Route path="/video/videorecent" element={<VideoRecent />} />
        <Route path="/video/videoenglish" element={<VideoEnglish />} />
        <Route path="/video/videomath" element={<VideoMath />} />
        <Route path="/video/videoscience" element={<VideoScience />} />
        <Route path="/video/videoict" element={<VideoIct />} />
        <Route
          path="/video/videointernational"
          element={<VideoInternational />}
        />
        <Route path="/video/videobangladesh" element={<VideoBangladesh />} />
        <Route path="/video/videosuggestion" element={<VideoSuggetion />} />

        {/* Pdf Segment Route */}
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/pdf/pdfroutine" element={<PdfRutine />} />
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

        <Route path="/jobsulationtopic" element={<Job />} />
        <Route
          path="/jobsulationtopic/bengaliliterature"
          element={<BengaliLiterature />}
        />
        <Route
          path="/jobsulationtopic/bengaliliteratureQuestion/:section"
          element={<BengaliLiteratureInner />}
        />
        <Route
          path="/jobsulationtopic/banglaGrammer"
          element={<BanglaGrammer />}
        />
        <Route
          path="/jobsulationtopic/banglaGrammerQuestion/:section"
          element={<BanglaGrammerInner />}
        />
        <Route path="/jobsulationtopic/english" element={<JobEnglish />} />
        <Route
          path="/jobsulationtopic/english/:section"
          element={<JobEnglishInner />}
        />
        <Route
          path="/jobsulationtopic/englishLanguage"
          element={<EnglishLanguage />}
        />
        <Route
          path="/jobsulationtopic/englishLanguage/:section"
          element={<EnglishLanguageInner />}
        />
        <Route
          path="/jobsulationtopic/bangladeshiMatters"
          element={<BangladeshiMatters />}
        />
        <Route
          path="/jobsulationtopic/bangladeshiMatters/:section"
          element={<BangladeshiMattersInner />}
        />
        <Route
          path="/jobsulationtopic/bangladeshiMatters"
          element={<BangladeshiMatters />}
        />
        <Route
          path="/jobsulationtopic/internationalMatters"
          element={<InternationalMatters />}
        />
        <Route
          path="/jobsulationtopic/internationalMatters/:section"
          element={<InternationalMattersInner />}
        />
        <Route path="/jobsulationtopic/geography" element={<Geography />} />
        <Route
          path="/jobsulationtopic/geography/:section"
          element={<GeoGraphyInner />}
        />
        <Route path="/jobsulationtopic/governance" element={<Governance />} />
        <Route
          path="/jobsulationtopic/governance/:section"
          element={<GovernanceInner />}
        />
        <Route
          path="/jobsulationtopic/basicScience"
          element={<BasicScience />}
        />
        <Route
          path="/jobsulationtopic/basicScience/:section"
          element={<BasicScienceInner />}
        />
        <Route path="/jobsulationtopic/computer" element={<Computer />} />
        <Route
          path="/jobsulationtopic/computer/:section"
          element={<ComputerInner />}
        />

        <Route path="/jobsulationtopic/basicmath" element={<Basicmath />} />
        <Route
          path="/jobsulationtopic/basicmath/:section"
          element={<BasicmathInner />}
        />
        <Route
          path="/jobsulationtopic/mentalSkill"
          element={<MentalSkills />}
        />
        <Route
          path="/jobsulationtopic/mentalSkill/:section"
          element={<MentalSkillsInner />}
        />
        <Route path="/jobsulationtopic/bankMath" element={<BankMath />} />
        <Route
          path="/jobsulationtopic/bankMath/:section"
          element={<BankMathInner />}
        />

        <Route path="/jobsulationtopic/bankEnglish" element={<Bankenglish />} />
        <Route
          path="/jobsulationtopic/bankEnglish/:section"
          element={<BankenglishInner />}
        />

        <Route path="/jobsulationtopic/bankscience" element={<BankScience />} />
        <Route path="/jobsulationtopic/bankbdaffiar" element={<BankAffir />} />
        <Route
          path="/jobsulationtopic/bankinternationalaffiar"
          element={<BankInternationalAffirs />}
        />
        <Route
          path="/jobsulationtopic/nationalandInternatioanl"
          element={<NationalAndInterNational />}
        />
        <Route
          path="/jobsulationtopic/variabledata"
          element={<VariableData />}
        />

        {/* Job Sulation */}

        <Route path="/jobsulationpast" element={<Jobsulation />} />

        {/* Last BCS */}
        <Route path="/lastbcs" element={<LastBCS />} />

        {/* Subject Wise */}
        <Route path="/subjectwise" element={<SubjectWise />} />
        <Route
          path="/subjectwise/banglaMetter"
          element={<SubBanglaMetters />}
        />

        {/* <=====================================Preminum Section ========================================> */}
        {/* Search */}
        <Route path="/searchquestion" element={<Search />} />
        {/* Central Archive */}
        <Route path="/centralArchive" element={<CentralArchive />} />
        {/* Central Favorite */}
        <Route path="/centralfavorite" element={<CentralFavorite />} />
        {/* Central Result */}
        <Route path="/centralresult" element={<CentralResult />} />
        {/* Quiz Master */}
        <Route path="/quizmaster" element={<QuizMaster />} />
        {/* Wrong And Unanswered */}
        <Route path="/wrongandunanswered" element={<WrongAndUnanswered />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
