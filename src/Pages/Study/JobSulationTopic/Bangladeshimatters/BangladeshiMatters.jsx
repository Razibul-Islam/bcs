import React from "react";
import { Link } from "react-router-dom";

const BangladeshiMatters = () => {
  const data = [
    { _id: 1, title: "বাংলাদেশের জাতীয় বিষয়াবলি" },
    { _id: 2, title: "বাংলাদেশের কৃষিজ সম্পদ" },
    { _id: 3, title: "বাংলাদেশের অর্থনীতি" },
    {
      _id: 4,
      title:
        "বাংলাদেশের শিল্প ও বাণিজ্য (শিল্প উৎপাদন, আমদানি রপ্তানি, গার্মেন্টস শিল্প ইত্যাদি)",
    },
    {
      _id: 5,
      title: "বাংলাদেশের জনমিতিক বিষয়াবলি (জনসংখ্যা, আদমশুমারি, জাতি, গোষ্ঠী)",
    },
    { _id: 6, title: "বাংলাদেশের সংবিধান" },
    { _id: 7, title: "বাংলাদেশের রাজনৈতিক ব্যবস্থা" },
    { _id: 8, title: "বাংলাদেশের সরকার ব্যবস্থা" },
    { _id: 9, title: "বাংলাদেশের জাতীয় অর্জন ও অন্যান্য" },
    {
      _id: 10,
      title:
        "সাম্প্রতিক বাংলাদেশ বিষয়াবলি (অর্থনৈতিক সমীক্ষা, বাজেট ও অন্যান্য সমীক্ষা)",
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-center my-4 text-lg text-teal-500">
        বাংলাদেশ বিষয়াবলি
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
                to={`/jobsulationtopic/bangladeshiMatters/${item.title}`}
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

export default BangladeshiMatters;
