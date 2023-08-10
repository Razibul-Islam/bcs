import React from "react";
import { Link } from "react-router-dom";

const InternationalMatters = () => {
  const data = [
    { _id: 1, title: "বৈশ্বিক ইতিহাস" },
    { _id: 2, title: "আঞ্চলিক ও আন্তর্জাতিক ব্যবস্থা" },
    { _id: 3, title: "ভূ-রাজনীতি" },
    { _id: 4, title: "আন্তর্জাতিক নিরাপত্তা ও আন্তঃরাষ্ট্রীয় ক্ষমতা সম্পর্ক" },
    { _id: 5, title: "আন্তর্জাতিক পরিবেশগত ইস্যু ও কূটনীতি" },
    { _id: 6, title: "আন্তর্জাতিক সংগঠন এবং বৈশ্বিক অর্থনৈতিক প্রতিষ্ঠান" },
    { _id: 7, title: "বিশ্বের সাম্প্রতিক ও চলমান ঘটনা প্রবাহ" },
  ];

  return (
    <div className="p-5">
      <h1 className="text-center my-4 text-lg text-teal-500">
        আন্তর্জাতিক বিষয়াবলি
      </h1>
      <div className="my-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((item, i) => (
          <div
            key={i}
            className="text-center h-40 p-5 text-white  flex justify-center flex-col items-center rounded shadow-lg bg-teal-500"
          >
            <p className="mt-3 text-xl">{item.title}</p>
            <p className="flex justify-between text-sm w-4/6 my-2">
              <span>SubTopics: {item.subtopic}</span>
              <span>Questions: {item.question}</span>
            </p>
            <div className="flex space-x-3 items-center text-xs">
              <Link
                to={`/jobsulationtopic/banglaGrammer/${item.title}`}
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

export default InternationalMatters;
