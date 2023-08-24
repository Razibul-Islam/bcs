import { Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import SignUP from "./Auth/SignUp";
import Reset from "./Auth/Reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Dashboard/Dashboard";
import VideoSection from "./Dashboard/VideoSection.jsx/VideoSection";
import VideoDRutin from "./Dashboard/VideoSection.jsx/Rutin";
import PDFDPDFSection from "./Dashboard/PDFSection/PDFSection";
import PDFDPDFRutine from "./Dashboard/PDFSection/PDFRutine";
import JobSulationTopic from "./Dashboard/JobSulationTopic/JobSulationTopic";
import PastJobsQuestion from "./Dashboard/PastJobsQuestion/PastJobsQuestion";
import ReadTopicaly from "./Dashboard/ReadTopicaly/ReadTopicaly";
import BCSPastQuestion from "./Dashboard/BCSPastQuestion/BCSPastQuestion";
import Navbar from "./Pages/Global/Navbar";
import TopicForReadTopic from "./Pages/Study/SubjectWise/TopicForReadTopic";
import Home from "./Pages/Home";
import VideoRutine from "./Pages/Study/Video/Rutine";
import VideoWeekly from "./Pages/Study/Video/Weekly";
import VideoVideo from "./Pages/Study/Video/Video";
import VideoRecent from "./Pages/Study/Video/Recent";
import VideoEnglish from "./Pages/Study/Video/English";
import VideoMath from "./Pages/Study/Video/Math";
import VideoScience from "./Pages/Study/Video/Science";
import VideoIct from "./Pages/Study/Video/Ict";
import VideoInternational from "./Pages/Study/Video/International";
import VideoBangladesh from "./Pages/Study/Video/Bangladesh";
import VideoSuggetion from "./Pages/Study/Video/Suggetion";
import PdfWeekly from "./Pages/Study/PDF/PdfWeekly";
import PdfRecent from "./Pages/Study/PDF/PdfRecent";
import Pdf from "./Pages/Study/PDF/Pdf";
import PdfEnglish from "./Pages/Study/PDF/PdfEnglish";
import PdfMath from "./Pages/Study/PDF/PdfMath";
import PdfScience from "./Pages/Study/PDF/PdfScience";
import PdfIct from "./Pages/Study/PDF/PdfIct";
import PdfInternational from "./Pages/Study/PDF/PdfInternational";
import PdfBangladesh from "./Pages/Study/PDF/PdfBangladesh";
import PdfSuggetion from "./Pages/Study/PDF/PdfSuggetion";
import SubjectWise from "./Pages/Study/SubjectWise/SubjectWise";
import Search from "./Pages/Search/Search";
import CentralArchive from "./Pages/CentralArchive/CentralArchive";
import CentralFavorite from "./Pages/CentralFavorite/CentralFavorite";
import CentralResult from "./Pages/CentralResult/CentralResult";
import QuizMaster from "./Pages/QuizMaster/QuizMaster";
import WrongAndUnanswered from "./Pages/WrongAndUnanswered/WrongAndUnanswered";
import SubjectWiseQuestion from "./Pages/Study/SubjectWise/SubjectWiseQuestion";
import AllTopic from "./Pages/Study/SubjectWise/AllTopic";
import TopicWiseReadQuestion from "./Pages/Study/SubjectWise/TopicWiseReadQuestion";
import AllSubTopic from "./Pages/Study/SubjectWise/AllSubTopic";
import SubTopicWiseQuestion from "./Pages/Study/SubjectWise/SubTopicWiseQuestion";
import JobsAddTopic from "./Pages/Study/JobSulationTopic/JobsAddTopic";
import JobSulation from "./Pages/Study/JobSulationTopic/Job";
import JobsSubjectWiseQuestion from "./Pages/Study/JobSulationTopic/SubjectWiseQuestion";
import JobsTopic from "./Pages/Study/JobSulationTopic/JobsTopic";
import JobsSubtopics from "./Pages/Study/JobSulationTopic/JobsSubtopics";
import JobsTopicQuestion from "./Pages/Study/JobSulationTopic/JobsTopicQuestion";
import JobsSubQuestion from "./Pages/Study/JobSulationTopic/JobsSubQuestion";
import LastBCS from "./Pages/Study/LastBCS/LastBCS";
import LastBCSQuestion from "./Pages/Study/LastBCS/LastBCSQuestion";
import Jobsulationpast from "./Pages/Study/JobsulationPast/Jobsulationpast";
import JobSulationPastQuestion from "./Pages/Study/JobsulationPast/JobSulationPastQuestion";
import DFreeWeaklyModelTest from "./Dashboard/ExamSection/FreeWeaklyModelTest/FreeWeaklyModelTest";
import FreeModelRutin from "./Dashboard/ExamSection/FreeWeaklyModelTest/FreeModelRutin";
import FreeWeeklyModelTest from "./Pages/Exam/FreeWeeklyModelTest/FreeWeeklyModelTest";
import FreeWeaklyRutin from "./Pages/Exam/FreeWeeklyModelTest/FreeWeaklyRutin";
import FreeWeaklyStartExam from "./Pages/Exam/FreeWeeklyModelTest/FreeWeaklyStartExam";
import FreeWeaklyModelTestArchive from "./Pages/Exam/FreeWeeklyModelTest/FreeWeaklyModelTestArchive";
import FreeWeaklyArchive from "./Pages/Exam/FreeWeeklyModelTest/FreeWeaklyArchive";
import FreeWeaklyExamList from "./Dashboard/ExamSection/FreeWeaklyModelTest/FreeWeaklyExamList";
import FreeWeaklyResult from "./Pages/Exam/FreeWeeklyModelTest/FreeWeaklyResult";
import FreeWeaklyResultSingleView from "./Pages/Exam/FreeWeeklyModelTest/FreeWeaklyResultSingleView";
import BCSForNew from "./Pages/Exam/BCSForNew/BCSForNew";
import JobSolution from "./Pages/Exam/JobSolution/JobSolution";
import PreparationForGread from "./Pages/Exam/PreparationForGread/PreparationForGread";
import BcsForNewRoutine from "./Dashboard/ExamSection/BcsForNew/BcsForNewRoutine";
import BcsForNewRoutineModelTest from "./Dashboard/ExamSection/BcsForNew/BcsForNewRoutineModelTest";
import BCSForNewRoutineF from "./Pages/Exam/BCSForNew/BCSForNewRoutineF";
import JobSolutionRoutine from "./Pages/Exam/JobSolution/JobSolutionRoutine";
import PreparationForGreadRoutin from "./Pages/Exam/PreparationForGread/PreparationForGreadRoutin";
import BCSForExperience from "./Pages/Exam/BCSForExperience/BCSForExperience";
import Teacher from "./Pages/Exam/Teacher/Teacher";
import Bank from "./Pages/Exam/Bank/Bank";
import SubjectWisePreparation from "./Pages/Exam/SubjectWisePreparation/SubjectWisePreparation";
import AddBankRoutine from "./Pages/Exam/Bank/AddBankRoutine";
import BCSForExperienceRoutine from "./Pages/Exam/BCSForExperience/BCSForExperienceRoutine";
import SubjectWisePreparationRoutine from "./Pages/Exam/SubjectWisePreparation/SubjectWisePreparationRoutine";
import TeacherAddRoutine from "./Pages/Exam/Teacher/TeacherAddRoutine";
import JobSolutionModelTest from "./Dashboard/ExamSection/JobSolution/JobSolutionModelTest";
import JobSolutionRotineD from "./Dashboard/ExamSection/JobSolution/JobSolutionRotineD";
import PreparationForGreadModelTest from "./Dashboard/ExamSection/PreparationForGread/PreparationForGreadModelTest";
import PreparationForGreadRoutine from "./Dashboard/ExamSection/PreparationForGread/PreparationForGreadRoutine";
import SubjectWisePreparationModelTest from "./Dashboard/ExamSection/SubjectWisePreparation/SubjectWisePreparationModelTest";
import SubjectWisePreparationRoutineD from "./Dashboard/ExamSection/SubjectWisePreparation/SubjectWisePreparationRoutineD";
import BankModelTest from "./Dashboard/ExamSection/Bank/BankModelTest";
import BankRoutine from "./Dashboard/ExamSection/Bank/BankRoutine";
import ExperienceModelTest from "./Dashboard/ExamSection/Experience/ExperienceModelTest";
import ExperienceRoutine from "./Dashboard/ExamSection/Experience/ExperienceRoutine";
import TeacherTestModel from "./Dashboard/ExamSection/Teacher/TeacherTestModel";
import TeacherRoutineD from "./Dashboard/ExamSection/Teacher/TeacherRoutineD";
import PdfRutine from "./Pages/Study/PDF/PdfRutine";
import UserList from "./Dashboard/UserList";
import BCSForNewStartExam from "./Pages/Exam/BCSForNew/BCSForNewStartExam";
import JobSolutionExam from "./Pages/Exam/JobSolution/JobSolutionExam";
import PreparationForGreadExam from "./Pages/Exam/PreparationForGread/PreparationForGreadExam";
import BankExam from "./Pages/Exam/Bank/BankExam";
import BCSForExperienceExam from "./Pages/Exam/BCSForExperience/BCSForExperienceExam";
import SubjectWisePreparationExam from "./Pages/Exam/SubjectWisePreparation/SubjectWisePreparationExam";
import TeacherExam from "./Pages/Exam/Teacher/TeacherExam";
import BCSForNewArchive from "./Pages/Exam/BCSForNew/BCSForNewArchive";
import BCSForNewModelTestArchive from "./Pages/Exam/BCSForNew/BCSForNewModelTestArchive";
import AlreadyAttendExam from "./Pages/Exam/AlreadyAttendExam";
import BCSForNewResult from "./Pages/Exam/BCSForNew/BCSForNewResult";
import BcsForNewResultSingle from "./Pages/Exam/BCSForNew/BcsForNewResultSingle";
import BCSForNewMaritList from "./Pages/Exam/BCSForNew/BCSForNewMaritList";
import BankArchiveSingle from "./Pages/Exam/Bank/BankArchiveSingle";
import BankArchive from "./Pages/Exam/Bank/BankArchive";
import BankResult from "./Pages/Exam/Bank/BankResult";
import BankResultSignle from "./Pages/Exam/Bank/BankResultSignle";
import BCSForExperienceArchive from "./Pages/Exam/BCSForExperience/BCSForExperienceArchive";
import BCSForExperienceArchiveSingle from "./Pages/Exam/BCSForExperience/BCSForExperienceArchiveSingle";
import BCSForExperienceResult from "./Pages/Exam/BCSForExperience/BCSForExperienceResult";
import BCSForExperienceResultSingle from "./Pages/Exam/BCSForExperience/BCSForExperienceResultSingle";
import JobSolutionArchive from "./Pages/Exam/JobSolution/JobSolutionArchive";
import JobSolutionArchiveSingle from "./Pages/Exam/JobSolution/JobSolutionArchiveSingle";
import JobSolutionResult from "./Pages/Exam/JobSolution/JobSolutionResult";
import JobSulationResultSingle from "./Pages/Exam/JobSolution/JobSulationResultSingle";
import PreparationForGreadArchive from "./Pages/Exam/PreparationForGread/PreparationForGreadArchive";
import PreparationForGreadArchiveSingle from "./Pages/Exam/PreparationForGread/PreparationForGreadArchiveSingle";
import PreparationforgreadResult from "./Pages/Exam/PreparationForGread/PreparationforgreadResult";
import PreparationforgreadResultSingle from "./Pages/Exam/PreparationForGread/PreparationforgreadResultSingle";
import SubjectWisePreparationArchive from "./Pages/Exam/SubjectWisePreparation/SubjectWisePreparationArchive";
import SubjectWisePreparationArchiveSingle from "./Pages/Exam/SubjectWisePreparation/SubjectWisePreparationArchiveSingle";
import SubjectWisePreparationResult from "./Pages/Exam/SubjectWisePreparation/SubjectWisePreparationResult";
import SubjectWisePreparationResultSingle from "./Pages/Exam/SubjectWisePreparation/SubjectWisePreparationResultSingle";
import TeacherArchive from "./Pages/Exam/Teacher/TeacherArchive";
import TeacherArchiveSingle from "./Pages/Exam/Teacher/TeacherArchiveSingle";
import TeacherResult from "./Pages/Exam/Teacher/TeacherResult";
import TeacherResultSingle from "./Pages/Exam/Teacher/TeacherResultSingle";
import FreeWeaklyMeritList from "./Pages/Exam/FreeWeeklyModelTest/FreeWeaklyMeritList";
import FreeWeaklyMeritListSingleView from "./Pages/Exam/FreeWeeklyModelTest/MeitListSingleView";
import BankExamList from "./Dashboard/ExamSection/Bank/BankExamList";
import BCSForNewExam from "./Dashboard/ExamSection/BcsForNew/BCSForNewExam";
import ExperienceExam from "./Dashboard/ExamSection/Experience/ExperienceExam";
import JobSolutionExamList from "./Dashboard/ExamSection/JobSolution/JobSolutionExamList";
import PreparationForGreadExamList from "./Dashboard/ExamSection/PreparationForGread/PreparationForGreadExamList";
import SubjectWisePreparationExamD from "./Dashboard/ExamSection/SubjectWisePreparation/SubjectWisePreparationExamD";
import TeacherExamList from "./Dashboard/ExamSection/Teacher/TeacherExamList";
import BankMerit from "./Pages/Exam/Bank/BankMerit";
import BankMeritListSingle from "./Pages/Exam/Bank/BankMeritListSingle";
import BCSForExperienceMerit from "./Pages/Exam/BCSForExperience/BCSForExperienceMerit";
import BCSForExperienceMeritSingle from "./Pages/Exam/BCSForExperience/BCSForExperienceMeritSingle";
import BCSForNewMaritListSingle from "./Pages/Exam/BCSForNew/BCSForNewMaritListSingle";
import JobSolutionMerit from "./Pages/Exam/JobSolution/JobSolutionMerit";
import JobSolutionMeritSignle from "./Pages/Exam/JobSolution/JobSolutionMeritSignle";
import PreparationForGreadMeritSingle from "./Pages/Exam/PreparationForGread/PreparationForGreadMeritSingle";
import PreparationForGreadMerit from "./Pages/Exam/PreparationForGread/PreparationForGreadMerit";
import SubjectWiseMerit from "./Pages/Exam/SubjectWisePreparation/SubjectWiseMerit";
import SubjectWiseMeritSingle from "./Pages/Exam/SubjectWisePreparation/SubjectWiseMeritSingle";
import TeacherMeritSingle from "./Pages/Exam/Teacher/TeacherMeritSingle";
import TeacherMerit from "./Pages/Exam/Teacher/TeacherMerit";

function App() {
  return (
    <div className="bg-banner ">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUP />}></Route>
        <Route path="/reset" element={<Reset />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/users" element={<UserList />}></Route>
          <Route path="/dashboard/video-section" element={<VideoSection />} ></Route>
          <Route path="/dashboard/video-section/rutin" element={<VideoDRutin />} ></Route>
          <Route path="/dashboard/pdf-section" element={<PDFDPDFSection />} ></Route>
          <Route path="/dashboard/pdf-section/rutin" element={<PDFDPDFRutine />} ></Route>
          <Route path="/dashboard/job-solution-topically" element={<JobSulationTopic />} ></Route>
          <Route path="/dashboard/add-jobs-topic" element={<JobsAddTopic />} ></Route>
          <Route path="/dashboard/past-jobs-question" element={<PastJobsQuestion />} ></Route>
          <Route path="/dashboard/read-topicaly" element={<ReadTopicaly />} ></Route>
          <Route path="/dashboard/past-bcs-question" element={<BCSPastQuestion />} ></Route>
          <Route path="/dashboard/read-topic-add" element={<TopicForReadTopic />} ></Route>
          <Route path="/dashboard/free-weakly-modeltest" element={<DFreeWeaklyModelTest />} ></Route>
          <Route path="/dashboard/free-weakly-modeltest/rutin" element={<FreeModelRutin />} ></Route>
          <Route path="/dashboard/free-weakly-modeltest/exam-list" element={<FreeWeaklyExamList />} ></Route>
          <Route path="/dashboard/free-weakly-modeltest" element={<DFreeWeaklyModelTest />} ></Route>
          <Route path="/dashboard/free-weakly-modeltest/rutin" element={<FreeModelRutin />} ></Route>
          <Route path="/dashboard/bcsForNew/routine" element={<BcsForNewRoutine />} />
          <Route path="/dashboard/bcsForNew" element={<BcsForNewRoutineModelTest />} />
          <Route path="/dashboard/bcsForNew/exam-list" element={<BCSForNewExam />} />
          <Route path="/dashboard/jobSolution" element={<JobSolutionModelTest />} />
          <Route path="/dashboard/jobSolution/routine" element={<JobSolutionRotineD />} />
          <Route path="/dashboard/jobSolution/exam-list" element={<JobSolutionExamList />} />
          <Route path="/dashboard/gradePreparation" element={<PreparationForGreadModelTest />} />
          <Route path="/dashboard/gradePreparation/routine" element={<PreparationForGreadRoutine />} />
          <Route path="/dashboard/gradePreparation/exam-list" element={<PreparationForGreadExamList />} />
          <Route path="/dashboard/subject-wise" element={<SubjectWisePreparationModelTest />} />
          <Route path="/dashboard/subject-wise/routine" element={<SubjectWisePreparationRoutineD />} />
          <Route path="/dashboard/subject-wise/exam-list" element={<SubjectWisePreparationExamD />} />
          <Route path="/dashboard/bank-preparation" element={<BankModelTest />} />
          <Route path="/dashboard/bank-preparation/routine" element={<BankRoutine />} />
          <Route path="/dashboard/bank-preparation/examList" element={<BankExamList />} />
          <Route path="/dashboard/experience" element={<ExperienceModelTest />} />
          <Route path="/dashboard/experience/routine" element={<ExperienceRoutine />} />
          <Route path="/dashboard/experience/exam-list" element={<ExperienceExam />} />
          <Route path="/dashboard/teacherRecruitment" element={<TeacherTestModel />} />
          <Route path="/dashboard/teacherRecruitment/routine" element={<TeacherRoutineD />} />
          <Route path="/dashboard/teacherRecruitment/exam-list" element={<TeacherExamList />} />
        </Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUP />}></Route>
        <Route path="/reset" element={<Reset />}></Route>
        <Route path="/video" element={<VideoVideo />} />
        <Route path="/video/videoroutine" element={<VideoRutine />} />
        <Route path="/video/videoweekly" element={<VideoWeekly />} />
        <Route path="/video/videorecent" element={<VideoRecent />} />
        <Route path="/video/videoenglish" element={<VideoEnglish />} />
        <Route path="/video/videomath" element={<VideoMath />} />
        <Route path="/video/videoscience" element={<VideoScience />} />
        <Route path="/video/videoict" element={<VideoIct />} />
        <Route path="/video/videointernational" element={<VideoInternational />} />
        <Route path="/video/videobangladesh" element={<VideoBangladesh />} />
        <Route path="/video/videosuggestion" element={<VideoSuggetion />} />
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
        <Route path="/subjectwise" element={<SubjectWise />} />
        <Route path="/searchquestion" element={<Search />} />
        <Route path="/centralArchive" element={<CentralArchive />} />
        <Route path="/centralfavorite" element={<CentralFavorite />} />
        <Route path="/centralresult" element={<CentralResult />} />
        <Route path="/quizmaster" element={<QuizMaster />} />
        <Route path="/wrongandunanswered" element={<WrongAndUnanswered />} />
        <Route path="/subjectwise/:subject" element={<SubjectWiseQuestion />} />
        <Route path="/subjectwise/topic/:subject" element={<AllTopic />} />
        <Route path="/TopicWiseReadQuestion/:topic" element={<TopicWiseReadQuestion />} />
        <Route path="/Topicread-topically/subtopic/:topic" element={<AllSubTopic />} />
        <Route path="/sub-topics-wise-question/:subtopic" element={<SubTopicWiseQuestion />} />
        <Route path="/jobsulationtopic" element={<JobSulation />} />
        <Route path="/jobs-question-subject/:subject" element={<JobsSubjectWiseQuestion />} />
        <Route path="/jobs-topic/:subject" element={<JobsTopic />} />
        <Route path="/jobs-subtopic/:topic" element={<JobsSubtopics />} />
        <Route path="/jobs-question-topic/:topic" element={<JobsTopicQuestion />} />
        <Route path="/jobs-question-subtopic/:subtopic" element={<JobsSubQuestion />} />
        <Route path="/lastbcs" element={<LastBCS />} />
        <Route path="/lastbcs/:category" element={<LastBCSQuestion />} />
        <Route path="/jobsulationpast" element={<Jobsulationpast />} />
        <Route path="/already-attent-exam" element={<AlreadyAttendExam />} ></Route>
        <Route path="/free-weakly-model-test" element={<FreeWeeklyModelTest />} />
        <Route path="/preparationforgread" element={<PreparationForGread />} />
        <Route path="/jobsolution" element={<JobSolution />} />
        <Route path="/bcsfornew" element={<BCSForNew />} />
        <Route path="/bcsforexperience" element={<BCSForExperience />} />
        <Route path="/addteacher" element={<Teacher />} />
        <Route path="/addbank" element={<Bank />} />
        <Route path="/subjectwisepreparation" element={<SubjectWisePreparation />} />
        <Route path="/past-jobs-question/:category" element={<JobSulationPastQuestion />} />
        <Route path="/free-weakly-model-test" element={<FreeWeeklyModelTest />} />
        <Route path="/free-weakly-model-test/rutin" element={<FreeWeaklyRutin />} />
        <Route path="/free-weally-start-exam" element={<FreeWeaklyStartExam />} />
        <Route path="/free-weakly-model-test/archive" element={<FreeWeaklyModelTestArchive />} />
        <Route path="/free-waekly-archive/:_id" element={<FreeWeaklyArchive />} />
        <Route path="/free-weakly-result" element={<FreeWeaklyResult />} />
        <Route path="/free-weakly-result/:_id" element={<FreeWeaklyResultSingleView />} />
        <Route path="/already-attent-exam" element={<AlreadyAttendExam />} ></Route>
        <Route path="/free-weakly-meritlist-single/:date" element={<FreeWeaklyMeritListSingleView />} ></Route>
        <Route path="/free-weakly-model-test" element={<FreeWeeklyModelTest />} />
        <Route path="/free-weakly-model-test/rutin" element={<FreeWeaklyRutin />} />
        <Route path="/free-weally-start-exam" element={<FreeWeaklyStartExam />} />
        <Route path="/free-weakly-model-test/merit-list" element={<FreeWeaklyMeritList />} />
        <Route path="/bcsfornew/bcsForNewRoutine" element={<BCSForNewRoutineF />}/>
        <Route path="/bcsfornewstartexam" element={<BCSForNewStartExam />} />
        <Route path="/bcsfornew-archive/:_id" element={<BCSForNewArchive />} />
        <Route path="/bcsfornew/archive" element={<BCSForNewModelTestArchive />}/>
        <Route path="/bcsfornew/result" element={<BCSForNewResult />} />
        <Route path="/bcs-for-new-result/:_id" element={<BcsForNewResultSingle />}/>
        <Route path="/bcs-for-new/merit-list" element={<BCSForNewMaritList />}/>
        <Route path="/bcs-for-new-merit-list/:date" element={<BCSForNewMaritListSingle />}/>
        <Route path="/jobsolution/jobsolutionRoutine" element={<JobSolutionRoutine />}/>
        <Route path="/jobsolutionstartexam" element={<JobSolutionExam />} />
        <Route path="/jobsolution/Archive" element={<JobSolutionArchive />} />
        <Route path="/jobsolutionArchive/:_id" element={<JobSolutionArchiveSingle />}/>
        <Route path="/jobsolution/Result" element={<JobSolutionResult />} />
        <Route path="/jobsolutionResult/:_id" element={<JobSulationResultSingle />}/>
        <Route path="/jobsolution/merit" element={<JobSolutionMerit />} />
        <Route path="/jobsolutionMerit/:date" element={<JobSolutionMeritSignle />}/>
        <Route path="/preparationforgread/preparationforgreadroutine" element={<PreparationForGreadRoutin />}/>
        <Route path="/preparationforgreadstartexam" element={<PreparationForGreadExam />}/>
        <Route path="/preparationforgread/Archive" element={<PreparationForGreadArchive />}/>
        <Route path="/preparationforgreadArchive/:_id" element={<PreparationForGreadArchiveSingle />}/>
        <Route path="/preparationforgread/Result" element={<PreparationforgreadResult />}/>
        <Route path="/preparationforgreadResult/:_id" element={<PreparationforgreadResultSingle />}/>
        <Route path="/preparationforgread/Merit" element={<PreparationForGreadMerit />}/>
        <Route path="/preparationforgreadMerit/:date" element={<PreparationForGreadMeritSingle />}/>
        <Route path="/addbank/addbankRoutine" element={<AddBankRoutine />} />
        <Route path="/addbankstartexam" element={<BankExam />} />
        <Route path="/bank/Result" element={<BankResult />} />
        <Route path="/bankResult/:_id" element={<BankResultSignle />} />
        <Route path="/bank/Archive" element={<BankArchive />} />
        <Route path="/bankArchiveSingle/:_id" element={<BankArchiveSingle />} />
        <Route path="/bank/merit" element={<BankMerit />} />
        <Route path="/bankMeritSingle/:date" element={<BankMeritListSingle />} />
        <Route path="/bcsforexperience/bcsforexperienceroutine" element={<BCSForExperienceRoutine />}/>
        <Route path="/bcsforexperiencestartexam" element={<BCSForExperienceExam />}/>
        <Route path="/bcsforexperience/result" element={<BCSForExperienceResult />}/>
        <Route path="/bcsforexperienceresult/:_id" element={<BCSForExperienceResultSingle />}/>
        <Route path="/bcsforexperience/archive" element={<BCSForExperienceArchive />}/>
        <Route path="/bcsforexperienceArchive/:_id" element={<BCSForExperienceArchiveSingle />}/>
        <Route path="/bcsforexperience/Merit" element={<BCSForExperienceMerit />}/>
        <Route path="/bcsforexperienceMerit/:date" element={<BCSForExperienceMeritSingle />}/>
        <Route path="/subjectwisepreparation/subjectwisepreparationRoutine" element={<SubjectWisePreparationRoutine />}/>
        <Route path="/subjectwisepreparationstartexam" element={<SubjectWisePreparationExam />}/>
        <Route path="/subjectwisepreparation/Archive" element={<SubjectWisePreparationArchive />}/>
        <Route path="/subjectwisepreparationArchive/:_id" element={<SubjectWisePreparationArchiveSingle />}/>
        <Route path="/subjectwisepreparation/Result" element={<SubjectWisePreparationResult />}/>
        <Route path="/subjectwisepreparationResult/:_id" element={<SubjectWisePreparationResultSingle />}/>
        <Route path="/subjectwisepreparation/Merit" element={<SubjectWiseMerit />}/>
        <Route path="/subjectwisepreparationMerit/:date" element={<SubjectWiseMeritSingle />}/>
        <Route path="/addteacher/addteacherRoutine" element={<TeacherAddRoutine />}/>
        <Route path="/addteacherstartexam" element={<TeacherExam />} />
        <Route path="/addteacher/Archive" element={<TeacherArchive />} />
        <Route path="/addteacherArchive/:_id" element={<TeacherArchiveSingle />}/>
        <Route path="/addteacher/Result" element={<TeacherResult />} />
        <Route path="/addteacherResult/:_id" element={<TeacherResultSingle />}/>
        <Route path="/addteacher/Merit" element={<TeacherMerit />} />
        <Route path="/addteacherMerit/:date" element={<TeacherMeritSingle />}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
