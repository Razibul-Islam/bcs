import React from "react";
import { Link } from "react-router-dom";

const JobEnglish = () => {
  const data = [
    { _id: 1, title: "Old and Middle English Period" },
    { _id: 2, title: "The Renaissance Period" },
    { _id: 3, title: "The Neo-Classical Period" },
    { _id: 4, title: "The Romantic Period" },
    { _id: 5, title: "The Victorian Period" },
    { _id: 6, title: "Modern Period" },
    { _id: 7, title: "Post Modern Period" },
    { _id: 8, title: "Literary Terms and Genres" },
    { _id: 9, title: "Characters and Quotations" },
    { _id: 10, title: "Other Country's Literature" },
    { _id: 11, title: "Literary Ages and Periods" },
    { _id: 12, title: "Poetry" },
    { _id: 13, title: "Drama/Play" },
    { _id: 14, title: "Novel" },
  ];

  return (
    <div className="p-5">
      <h1 className="text-center my-4 text-lg text-teal-500">
        English Literature
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
                to={`/jobsulationtopic/english/${item.title}`}
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

export default JobEnglish;
