import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";

const PrimiumSectrion = () => {
  return (
    <div className="text-teal-500 mb-5">
      <section className="max-w-6xl mx-auto md:pt-10 rounded-md mb-10 block">
        <h1 className="text-center  text-teal-500 uppercase font-bold md:text-2xl  mt-5 md:mt-20">
          <span className="border border-dashed px-5 border-teal-600">
            Premium Segment
          </span>
        </h1>

        <section className="md:flex justify-between items-center ">
          <div className="md:block hidden">
            <img
              className="w-96 "
              src="https://cdni.iconscout.com/illustration/premium/thumb/online-learning-2245537-1889500.png"
              alt=""
            />
          </div>

          <div className="grid grid-cols-2  mt-5 md:py-10 px-2 gap-2 ">
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap-2 md:pr-3  pr-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1" />
              <Link to="/searchquestion">
                <span>প্রশ্ন সার্চ করুন</span>
              </Link>
            </div>

            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap-2 md:pr-3  pr-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1" />
              <Link to="/centralArchive">
                <span>Central Archive</span>
              </Link>
            </div>
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap-2 md:pr-3  pr-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1" />
              <Link to="/centralresult">
                <span>Central Results</span>
              </Link>
            </div>
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap-2 md:pr-3  pr-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1" />
              <Link to="/centralfavorite">
                <span>Central Favorite</span>
              </Link>
            </div>
            <div className="flex items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap-2 md:pr-3  pr-1">
              <MenuBookIcon className="bg-teal-500 text-white p-1" />
              <Link to="/quizmaster">
                <span>Quiz Master</span>
              </Link>
            </div>
            <div className="md:flex hidden items-center shadow-sm rounded shadow-teal-500 overflow-hidden gap- md:pr-3   ">
              <MenuBookIcon className="bg-teal-500 text-white p-1" />
              <Link to="/wrongandunanswered" className="">
                <span>Wrong and Unanswered</span>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default PrimiumSectrion;
