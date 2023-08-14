import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";

const ExamSection = () => {
  return (
    <div className="text-teal-500 md:pt-20">
      <section className="max-w-6xl mx-auto   md:pt-10 rounded-md ">
        <h1 className="text-center  text-teal-500 uppercase font-bold md:text-2xl  my-5 md:mt-20">
          <span className="border border-dashed px-5 border-teal-600">
            Exam Segment
          </span>
        </h1>
        <section className="flex justify-between mx-w-6xl mx-auto items-center">
          <div className="grid grid-cols-2 gap-2  md:gap-10 px-2 text-sm md:text-lg">
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap-2 md:gap-5 md:pr-3">
              <MenuBookIcon className="bg-teal-500 text-white p-1 md:ml-1 md:scale-150" />
              <Link to="/free-weakly-model-test">
                <span>ফ্রি সাপ্তাহিক মডেল টেস্ট </span>
              </Link>
            </div>
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap-2 md:gap-5 md:pr-3 pr-3">
              <MenuBookIcon className="bg-teal-500 text-white p-1 md:ml-1 md:scale-150" />
              <Link to="/bcs-for-new" className="info_item_content">
                <span>নতুনদের বিসিএস প্রস্তুতি</span>
              </Link>
            </div>
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden md:gap-5 gap-2 pr-3">
              <MenuBookIcon className="bg-teal-500 text-white p-1" />
              <Link to="/free-weakly-model-test">
                <span>বিষয় ভিত্তিক প্রস্তুতি</span>
              </Link>
            </div>

            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden md:gap-5 gap-2 pr-3">
              <MenuBookIcon className="bg-teal-500 text-white p-1 md:ml-1 md:scale-150" />
              <Link to="/job-solution">
                <span>জব সল্যুশন</span>
              </Link>
            </div>
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden md:gap-5 gap-2 pr-3">
              <MenuBookIcon className="bg-teal-500 text-white p-1 md:ml-1 md:scale-150" />
              <Link to="/free-weakly-model-test">
                <span>ব্যাংক নিয়োগ প্রস্তুতি</span>
              </Link>
            </div>
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden md:gap-5 gap-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1 md:ml-1 md:scale-150" />
              <Link to="/bcs-for-exprienced" className="">
                <span>অভিজ্ঞদের বিসিএস প্রস্তুতি</span>
              </Link>
            </div>

            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden md:gap-5 gap-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1  md:ml-1 md:scale-150" />
              <Link to="/free-weakly-model-test">
                <span>শিক্ষক নিয়োগ ও নিবন্ধন</span>
              </Link>
            </div>
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden md:gap-5 gap-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1  md:ml-1 md:scale-150" />
              <Link to="/preparation-for-gread">
                <span>৯ম - ২০ তম গ্রেডের প্রস্তুতি</span>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ExamSection;
