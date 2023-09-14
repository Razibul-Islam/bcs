import { DashboardOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import HelpIcon from "@mui/icons-material/Help";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import RateReviewIcon from "@mui/icons-material/RateReview";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import GroupIcon from "@mui/icons-material/Group";
import DiamondIcon from '@mui/icons-material/Diamond';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Auth/Firebase.int";
import Loading from "../Loader/Loading";

const Dashboard = () => {
  const [study, setStudy] = useState(false);
  const [exam, setExam] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <div className="bg-[#1F2937] w-full p-5 flex justify-between">
        <Link className="text-white w-[270px]">BCS Pioneer</Link>
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="text-white flex items-center gap-2">
            <HomeIcon /> / Home
          </Link>
          <button className="bg-slate-700 px-5 py-1 text-white ">
            Log Out
          </button>
        </div>
      </div>
      <section className="flex justify-between gap-5">
        <div className="bg-[#1F2937] w-[300px] min-h-screen">
          <Link
            to="/dashboard"
            className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900"
          >
            <DashboardOutlined /> Dashboard
          </Link>
          <Link
            to="/dashboard/users"
            className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900"
          >
            <GroupIcon /> User List
          </Link>
          <button
            onClick={() => setStudy(!study)}
            to="/dashboard"
            className="text-slate-100  w-full px-8 py-2 flex items-center gap-4 hover:bg-slate-900"
          >
            <ImportContactsIcon /> Study Section
          </button>
          <div className={`${study ? "text-sm" : "hidden"}`}>
            <Link
              to="/dashboard/video-section"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900"
            >
              <OndemandVideoIcon /> Video
            </Link>
            <Link
              to="/dashboard/pdf-section"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900"
            >
              <PictureAsPdfIcon /> PDF
            </Link>
            <Link
              to="/dashboard/job-solution-topically"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900 "
            >
              <CreditScoreIcon />
              জব সলিউশন টপিক ভিত্তিক
            </Link>
            <Link
              to="/dashboard/past-jobs-question"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900"
            >
              <HelpIcon />
              বিগত জবস প্রশ্ন
            </Link>
            <Link
              to="/dashboard/read-topicaly"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900"
            >
              <CreditScoreIcon />
              বিষয়ভিত্তিক পড়ুন
            </Link>
            <Link
              to="/dashboard/past-bcs-question"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900 "
            >
              <CreditScoreIcon />
              বিগত বিসিএস প্রশ্ন
            </Link>
          </div>
          <button
            onClick={() => setExam(!exam)}
            to="/dashboard"
            className="text-slate-100  w-full px-8 py-2 flex items-center gap-4 hover:bg-slate-900"
          >
            <RateReviewIcon /> Exam Section
          </button>
          <div className={`${exam ? "text-sm" : "hidden"}`}>
            <Link
              to="/dashboard/free-weakly-modeltest"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900 "
            >
              <EditCalendarIcon /> ফ্রি মডেল টেস্ট
            </Link>
            <Link
              to="/dashboard/bcsForNew"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900 "
            >
              <EditCalendarIcon /> নতুনের জন্য বিসিএস
            </Link>
            <Link
              to="/dashboard/jobSolution"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900 "
            >
              <EditCalendarIcon /> জব সলিউশন
            </Link>
            <Link
              to="/dashboard/gradePreparation"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900 "
            >
              <EditCalendarIcon /> গ্রেডের প্রস্তুতি
            </Link>
            <Link
              to="/dashboard/subject-wise"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900 "
            >
              <EditCalendarIcon /> বিষয়ভিত্তিক
            </Link>
            <Link
              to="/dashboard/bank-preparation"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900 "
            >
              <EditCalendarIcon /> ব্যাংক প্রস্তুতি
            </Link>
            <Link
              to="/dashboard/experience"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900 "
            >
              <EditCalendarIcon /> অভিজ্ঞদের জন্য বিসিএস
            </Link>
            <Link
              to="/dashboard/teacherRecruitment"
              className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900 "
            >
              <EditCalendarIcon /> শিক্ষক নিয়োগ ও নিবন্ধন
            </Link>
          </div>
          <Link className="text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900 "><DiamondIcon /> Pakage</Link>
        </div>
        <div className="w-[calc(100%-300px)]">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
