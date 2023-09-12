import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import PanToolAltIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


const PrimiumSectrion = () => {


  useEffect(() => {
    const options = {
      strings: ['Others Section'], // Add more strings if needed
      typeSpeed: 80, // Typing speed in milliseconds
      showCursor: false,
      backSpeed: 50, // Backspacing speed in milliseconds
      loop: true, // Loop the animation indefinitely
    };

    const typed = new Typed('.typing-text-3', options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="md:pt-20 max-w-6xl mx-auto px-2">
      <section className="max-w-6xl mx-auto md:pt-10 rounded-md mb-10 block">
        <h1 className=" my-5 text-center text-xl space-x-3 text-[#B800FF]"><PanToolAltIcon className="text-[#B800FF]" /> <span className="typing-text-3"></span></h1>
        <hr className="my-2" />
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-2">
          <Link to="/searchquestion" className="shadow-sm text-center card-3 md:p-5 px-2 py-3 text-white flex justify-between items-center">
            <span>প্রশ্ন সার্চ করুন</span>
            <ArrowCircleRightIcon />
          </Link>
          <Link to="/centralArchive" className="shadow-sm text-center card-3 md:p-5 px-2 py-3 text-white flex justify-between items-center">
            <span>Central Archive</span>
            <ArrowCircleRightIcon />
          </Link>
          <Link to="/centralresult" className="shadow-sm text-center card-3 md:p-5 px-2 py-3 text-white flex justify-between items-center">
            <span>Central Results</span>
            <ArrowCircleRightIcon />
          </Link>
          <Link to="/centralfavorite" className="shadow-sm text-center card-3 md:p-5 px-2 py-3 text-white flex justify-between items-center">
            <span>Central Favorite</span>
            <ArrowCircleRightIcon />
          </Link>
          <Link to="/quizmaster" className="shadow-sm text-center card-3 md:p-5 px-2 py-3 text-white flex justify-between items-center">
            <span>Quiz Master</span>
            <ArrowCircleRightIcon />
          </Link>
          <Link to="/wrongandunanswered" className="shadow-sm text-center card-3 md:p-5 px-2 py-3 text-white flex justify-between items-center">
            <span>Wrong and Unanswered</span>
            <ArrowCircleRightIcon />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrimiumSectrion;