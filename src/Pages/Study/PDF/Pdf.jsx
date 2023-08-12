import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Link } from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AbcIcon from "@mui/icons-material/Abc";
import ScienceIcon from "@mui/icons-material/Science";
import BiotechIcon from "@mui/icons-material/Biotech";
import PublicIcon from "@mui/icons-material/Public";
import FlagIcon from "@mui/icons-material/Flag";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const Pdf = () => {
  return (
    <div className="p-5">
      <h1 className="text-center my-4 text-lg text-teal-500">PDF</h1>
      <div className="my-20  max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5">
        <Link
          to="/pdf/pdfroutine"
          className="text-center h-40 p-5 text-white  flex justify-center flex-col items-center rounded shadow-lg bg-teal-500"
        >
          <DateRangeIcon />
          <p className="mt-3 text-xl">Routine</p>
        </Link>
        <Link
          to="/pdf/pdfweekly"
          className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg"
        >
          <AssignmentIcon />
          <p className="mt-3 text-xl">Weekly Bulletin</p>
        </Link>
        <Link
          to="/pdf/pdfrecent"
          className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg"
        >
          <HelpOutlineIcon />
          <p className="mt-3 text-xl">সাম্প্রতিক সমাচার</p>
        </Link>
        <Link
          to="/pdf/pdfenglish"
          className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg"
        >
          <AbcIcon />
          <p className="mt-3 text-xl">English Literature</p>
        </Link>
        <Link
          to="/pdf/pdfmath"
          className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg"
        >
          <AutoStoriesIcon />
          <p className="mt-3 text-xl">Math Master</p>
        </Link>
        <Link
          to="/pdf/pdfscience"
          className="text-center h-40 bg-teal-500 p-5  text-white flex justify-center flex-col items-center rounded shadow-lg"
        >
          <ScienceIcon />
          <p className="mt-3 text-xl">Science</p>
        </Link>
        <Link
          to="/pdf/pdfict"
          className="text-center h-40 bg-teal-500 p-5  text-white flex justify-center flex-col items-center rounded shadow-lg"
        >
          <BiotechIcon />
          <p className="mt-3 text-xl">ICT</p>
        </Link>
        <Link
          to="/pdf/pdfinternational"
          className="text-center h-40 bg-teal-500 p-5  text-white flex justify-center flex-col items-center rounded shadow-lg"
        >
          <PublicIcon />
          <p className="mt-3 text-xl">আন্তর্জাতিক বিষয়াবলি</p>
        </Link>
        <Link
          to="/pdf/pdfbangladesh"
          className="text-center h-40 bg-teal-500 p-5  text-white flex justify-center flex-col items-center rounded shadow-lg"
        >
          <FlagIcon />
          <p className="mt-3 text-xl">বাংলাদেশ বিষয়াবলি</p>
        </Link>
        <Link
          to="/pdf/pdfsuggestion"
          className="text-center h-40 bg-teal-500 p-5  text-white flex justify-center flex-col items-center rounded shadow-lg"
        >
          <SettingsSuggestIcon />
          <p className="mt-3 text-xl">সাজেশন</p>
        </Link>
      </div>
    </div>
  );
};

export default Pdf;
