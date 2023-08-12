import React from "react";
import { Link } from "react-router-dom";

const VariableData = () => {
  const data = [
    {
      title: "বাংলা ভাষা",
      _id: "01",
      question: "134",
      subtopic: "1",
    },
    {
      title: "ধ্বনিতত্ত্ব",
      _id: "02",
      question: "372",
      subtopic: "5",
    },
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
            <p className="mt-3 text-xl">{item.title}</p>
            <p className="flex justify-between text-sm w-4/6 my-2">
              <span>SubTopics: {item.subtopic}</span>
              <span>Questions: {item.question}</span>
            </p>
            <div className="flex space-x-3 items-center text-xs">
              <Link
                to={`/jobsulationtopic/banglaGrammer/${item._id}`}
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

export default VariableData;
