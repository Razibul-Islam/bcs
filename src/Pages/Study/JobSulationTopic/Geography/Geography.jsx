import React from "react";
import { Link } from "react-router-dom";

const Geography = () => {
  const data = [
    {
      _id: 1,
      title:
        "বাংলাদেশ ও বৈশ্বিক ভৌগোলিক অঞ্চল, সীমানা, পারিবেশিক, আর্থ - সামাজিক, ভূ-রাজনীতির গুরুত্ব",
    },
    { _id: 2, title: "অঞ্চলভিত্তিক ভৌত পরিবেশ, সম্পদের বন্টন ও গুরুত্ব" },
    {
      _id: 3,
      title:
        "বাংলাদেশ ও বৈশ্বিক পরিবেশ: প্রকৃতি ও সম্পদ, বন্টনের প্রধান চ্যালেঞ্জ সমূহ",
    },
    {
      _id: 4,
      title: "বাংলাদেশ ও বৈশ্বিক পরিবেশ পরিবর্তন: আবহাওয়া ও জলবায়ু নিয়ামকসমূহ",
    },
    {
      _id: 5,
      title:
        "প্রাকৃতিক দুর্যোগ ও ব্যবস্থাপনা: দুর্যোগের ধরন, প্রকৃতি ও ব্যবস্থাপনা",
    },
    {
      _id: 6,
      title: "বৃহত্তম, ক্ষুদ্রতম, উচ্চতম, গভীরতম, প্রশস্ততম, ইত্যাদি সম্পর্কিত",
    },
    { _id: 7, title: "নদী, সাগর, মহাসাগর, প্রণালী, সীমারেখা ইত্যাদি বিষয়ক" },
  ];

  return (
    <div className="p-5">
      <h1 className="text-center my-4 text-lg text-teal-500">
        ভূগোল ও দুর্যোগ ব্যবস্থাপনা
      </h1>
      <div className="my-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((item, i) => (
          <div
            key={i}
            className="text-center h-40 p-5 text-white  flex justify-center flex-col items-center rounded shadow-lg bg-teal-500"
          >
            <p className="my-3 text-xl">{item.title}</p>
            <div className="flex space-x-3 items-center text-xs">
              <Link
                to={`/jobsulationtopic/geography/${item.title}`}
                className="px-2 py-1 bg-teal-800/90 rounded-full"
              >
                View All Questions
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Geography;
