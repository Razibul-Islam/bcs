import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Typed from "typed.js";
import PanToolAltIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const ExamSection = () => {
  
  useEffect(() => {
    const options = {
      strings: ['Exam Section'], // Add more strings if needed
      typeSpeed: 80, // Typing speed in milliseconds
      showCursor: false,
      backSpeed: 50, // Backspacing speed in milliseconds
      loop: true, // Loop the animation indefinitely
    };

    const typed = new Typed('.typing-text', options);
    return () => {
      typed.destroy();
    };
  }, []);
  

  return (
    <div className="md:pt-20 max-w-6xl mx-auto px-2">
      <section className="md:pt-10 rounded-md ">
      <h1 className="my-5 text-center text-xl space-x-3 text-[#F2257F]"><PanToolAltIcon className="text-[#F2257F]"/> <span className="typing-text"></span></h1>
        <hr className="my-2" />
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-2">
            <Link  className="shadow-sm text-center card-1 md:p-5 px-2 py-3 text-white flex justify-between items-center" to="/free-weakly-model-test">
              <span>ফ্রী পরীক্ষা </span>
              <ArrowCircleRightIcon />
            </Link>
            <Link  to="/bcsfornew" className="shadow-sm text-center card-1 md:p-5 px-2 py-3 text-white flex justify-between items-center">
              <span>নতুনদের বিসিএস প্রস্তুতি</span>
              <ArrowCircleRightIcon />
            </Link>
            <Link  to="/subjectwisepreparation" className="shadow-sm text-center card-1 md:p-5 px-2 py-3 text-white flex justify-between items-cente">
              <span>বিষয় ভিত্তিক প্রস্তুতি</span>
              <ArrowCircleRightIcon />
            </Link>
            <Link  to="/jobsolution" className="shadow-sm text-center card-1 md:p-5 px-2 py-3 text-white flex justify-between items-cente">
              <span>জব সল্যুশন</span>
              <ArrowCircleRightIcon />
            </Link>
            <Link  to="/addbank" className="shadow-sm text-center card-1 md:p-5 px-2 py-3 text-white flex justify-between items-cente">
              <span>ব্যাংক নিয়োগ প্রস্তুতি</span>
              <ArrowCircleRightIcon />
            </Link>
            <Link  to="/addteacher" className="shadow-sm text-center card-1 md:p-5 px-2 py-3 text-white flex justify-between items-cente">
              <span>শিক্ষক নিয়োগ ও নিবন্ধন</span>
              <ArrowCircleRightIcon />
            </Link>

            <Link  to="/bcsforexperience" className="shadow-sm text-center card-1 md:p-5 px-2 py-3 text-white flex justify-between items-cente">
              <span>অভিজ্ঞদের বিসিএস প্রস্তুতি</span>
              <ArrowCircleRightIcon />
            </Link>

            <Link  to="/preparationforgread" className="shadow-sm text-center card-1 md:p-5 px-2 py-3 text-white flex justify-between items-cente">
              <span>৯ম - ২০ তম গ্রেডের প্রস্তুতি</span>
              <ArrowCircleRightIcon />
            </Link>
          </div>
      </section>
    </div>
  );
};

export default ExamSection;