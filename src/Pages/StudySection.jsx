import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Typed from "typed.js";
import PanToolAltIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
// import KeyboardDoubleArrowRightIcon from '';

const StudySection = () => {


  useEffect(() => {
    const options = {
      strings: ['Study Section'], // Add more strings if needed
      typeSpeed: 80, // Typing speed in milliseconds
      showCursor: false,
      backSpeed: 50, // Backspacing speed in milliseconds
      loop: true, // Loop the animation indefinitely
    };

    const typed = new Typed('.typing-text-2', options);
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className="md:pt-20 max-w-6xl mx-auto px-2">
      <section className="md:pt-10 rounded-md ">
        <h1 className="text-xl my-5 text-center space-x-3 text-[#32E37F]"><PanToolAltIcon className="text-[#32E37F]" /> <span className="typing-text-2"></span></h1>
        <hr className="my-2" />
        <div className="grid  md:grid-cols-3 grid-cols-2 gap-2  md:gap-10   md:text-lg mx-auto">
          <Link to="/video" className="shadow-sm text-center card-2 md:p-5 px-2 py-3 text-white flex justify-between items-center">
            <span>ভিডিও ক্লাস</span>
            <ArrowCircleRightIcon />
          </Link>
          <Link to="/pdf" className="shadow-sm text-center card-2 md:p-5 px-2 py-3 text-white flex justify-between items-center">
            <span>PDF Section</span>
            <ArrowCircleRightIcon />
          </Link>
          <Link to="/jobsulationpast" className="shadow-sm text-center card-2 md:p-5 px-2 py-3 text-white flex justify-between items-center">
            <span>বিগত জব সল্যুশন প্রশ্ন </span>
            <ArrowCircleRightIcon />
          </Link>
          <Link to="/subjectwise" className="shadow-sm text-center card-2 md:p-5 px-2 py-3 text-white flex justify-between items-center">
            <span>বিষয়ভিত্তিক পড়ুন</span>
            <ArrowCircleRightIcon />
          </Link>
          <Link to="/jobsulationtopic" className="shadow-sm text-center card-2 md:p-5 px-2 py-3 text-white flex justify-between items-center">
            <span>জব সল্যুশন টপিক ভিত্তিক</span>
            <ArrowCircleRightIcon />
          </Link>
          <Link to="/lastbcs" className="shadow-sm text-center card-2 md:p-5 px-2 py-3 text-white flex justify-between items-center">
            <span>বিগত বিসিএস প্রশ্ন</span>
            <ArrowCircleRightIcon />
          </Link>
        </div>

      </section>
    </div>
  );
};

export default StudySection;