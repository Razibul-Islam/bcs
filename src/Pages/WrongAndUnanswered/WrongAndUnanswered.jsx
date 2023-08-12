import React, { useState } from "react";
import Wrong from "./inner/Wrong";
import Correct from "./inner/Correct";
import Unanswered from "./inner/Unanswered";
import Canceled from "./inner/Canceled";

const WrongAndUnanswered = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="max-w-6xl mx-auto md:pt-10 rounded-md mb-10 block">
      <div>
        <div className="flex items-start justify-between">
          <select
            name=""
            id=""
            className="border border-teal-500 rounded-md py-1"
          >
            <option value="All Subject">সকল বিষয়</option>
            <option value="Bengali literature">বাংলা সাহিত্য</option>
            <option value="Bengali Language and Grammar">
              বাংলা ভাষা ও ব্যাকরণ
            </option>
            <option value="English Literature">English Literature</option>
            <option value="English Language">English Language</option>
            <option value="Bangladesh affairs">বাংলাদেশ বিষয়াবলি</option>
            <option value="International Affairs">আন্তর্জাতিক বিষয়াবলি</option>
            <option value="Geography and Disaster Management">
              ভূগোল ও দুর্যোগ ব্যবস্থাপনা
            </option>
            <option value="Ethics, values and good governance">
              নৈতিকতা ,মূল্যবোধ ও সুশাসন
            </option>
            <option value="General Science">সাধারণ বিজ্ঞান</option>
            <option value="Computers and Information Technology">
              কম্পিউটার ও তথ্যপ্রযুক্তি
            </option>
            <option value="General Mathematics">সাধারণ গণিত</option>
            <option value="Mental skills">মানসিক দক্ষতা</option>
            <option value="Bank Math">Bank Math</option>
            <option value="Bank English">Bank English</option>
            <option value="Bank Science and ICT">Bank Science and ICT</option>
            <option value="Bank BD Affairs">Bank BD Affairs</option>
            <option value="Bank International Affairs">
              Bank International Affairs
            </option>
            <option value="National and International Days and Themes">
              জাতীয় ও আন্তর্জাতিক দিবস ও প্রতিপাদ্য
            </option>
            <option value="variable data">পরিবর্তনশীল তথ্য</option>
          </select>
          <div className="w-[500px]">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal "
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                >
                  Wrong
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal "
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                >
                  Correct
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal "
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                >
                  Unanswered
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal "
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                >
                  Cancelled
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <Wrong />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <Correct />
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <Unanswered />
              </div>
              <div
                className={openTab === 4 ? "block" : "hidden"}
                id="link4"
              >
                <Canceled/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrongAndUnanswered;
