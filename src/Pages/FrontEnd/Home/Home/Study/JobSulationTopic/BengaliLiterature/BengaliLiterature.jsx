import React from "react";
import { Link } from "react-router-dom";

const BengaliLiterature = () => {
  const data = [
    {
      title: "বাংলা সাহিত্য প্রাচীন যুগ",
      _id: "01",
    },
    {
      title: "বাংলা সাহিত্যের মধ্যযুগ",
      _id: "02",
    },
    {
      title: "বাংলা সাহিত্যের আধুনিক যুগ",
      _id: "03",
    },
  ];
  return (
    <div className="p-5">
      <h1 className="text-center my-4 text-lg text-teal-500">বাংলা সাহিত্য</h1>
      <div className="my-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((item, i) => (
          <div
            key={i}
            className="text-center h-40 p-5 text-white  flex justify-center flex-col items-center rounded shadow-lg bg-teal-500"
          >
            <p className="my-3 text-xl">{item.title}</p>
            <div className="flex space-x-3 items-center text-xs">
              <Link
                to={`/jobsulationtopic/banglaGrammerQuestion/${item.title}`}
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

export default BengaliLiterature;
