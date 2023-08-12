import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";

const StudySection = () => {
  return (
    <div className="text-teal-500 md:pt-20">
      <section className="max-w-6xl mx-auto  md:pt-10 rounded-md ">
        <h1 className="text-center  text-teal-500 uppercase font-bold md:text-2xl  mt-5 md:mt-20">
          <span className="border border-dashed px-5 border-teal-600 ">
            Study Segment
          </span>
        </h1>

        <section className="flex justify-between items-center">
          <div className="md:block hidden">
            <img
              className="w-96 "
              src="https://cdni.iconscout.com/illustration/premium/thumb/online-learning-2245537-1889500.png"
              alt=""
            />
          </div>

          <div className="grid grid-cols-2 md:w-1/2 mt-5 md:py-10 px-2 text-sm gap-2">
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap-2 md:pr-3  pr-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1" />
              <Link to="/video">
                <span>ভিডিও ক্লাস</span>
              </Link>
            </div>
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap-2 md:pr-3  pr-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1" />
              <Link to="/pdf">
                <span>PDF Section</span>
              </Link>
            </div>
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap-2 md:pr-3  pr-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1" />
              <Link to="/jobsulationpast">
                <span>বিগত জব সল্যুশন প্রশ্ন </span>
              </Link>
            </div>
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap-2 md:pr-3  pr-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1" />
              <Link to="/subjectwise">
                <span>বিষয়ভিত্তিক পড়ুন</span>
              </Link>
            </div>
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap-1 md:pr-3  pr-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1" />
              <Link to="/jobsulationtopic">
                <span>জব সল্যুশন টপিক ভিত্তিক</span>
              </Link>
            </div>
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap-2 md:pr-3  pr-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1" />
              <Link to="/lastbcs">
                <span>বিগত বিসিএস প্রশ্ন</span>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default StudySection;
