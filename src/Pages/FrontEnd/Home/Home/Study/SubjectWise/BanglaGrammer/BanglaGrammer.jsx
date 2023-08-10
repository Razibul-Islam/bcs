import React from "react";
import { Link } from "react-router-dom";

const BanglaGrammer = () => {
  const data = [
    { _id: 1, title: "বাংলা ভাষা" },
    { _id: 2, title: "ধ্বনিতত্ত্ব" },
    { _id: 3, title: "শব্দ প্রকরণ" },
    { _id: 4, title: "পদ-প্রকরণ" },
    { _id: 5, title: "বাক্য প্রকরণ" },
  ];

  return (
    <div className="p-5">
      <h1 className="text-center my-4 text-lg text-teal-500">
        বাংলা ভাষা ও ব্যাকরণ
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
                to={`/jobsulationtopic/bengaliliteratureQuestion/${item.title}`}
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

export default BanglaGrammer;
