import React from "react";
import { Link } from "react-router-dom";

const BankMath = () => {
  const data = [
    {
      _id: 1,
      title: "Number System,Problems or Number,HCF & LCM",
    },
    {
      _id: 2,
      title: "Average and Mean",
    },
    {
      _id: 3,
      title: "Problems on Ages",
    },
    {
      _id: 4,
      title: "Percentage and Profit & Loss",
    },
    {
      _id: 5,
      title: "Partnership and Discount",
    },
    {
      _id: 6,
      title: "Ratio & Proportion,Allegation or Mixture",
    },
    {
      _id: 7,
      title: "Time & Work",
    },
    {
      _id: 8,
      title: "Chain Rule",
    },
    {
      _id: 9,
      title: "Probability,Permutation and Combination",
    },
    {
      _id: 10,
      title: "Time and Speed - Train and Boat",
    },
    {
      _id: 11,
      title: "Pipes & Cisterns",
    },
    {
      _id: 12,
      title: "Geometry-Mensuration,Trigonometry",
    },
    {
      _id: 13,
      title: "Simple and Compound Interest,Stock",
    },
    {
      _id: 14,
      title: "Algebra",
    },
    {
      _id: 15,
      title: "Surds, Indices and Logarithm",
    },
    {
      _id: 16,
      title: "Analytical Ability",
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
            <div className="flex space-x-3 items-center text-xs">
              <Link
                to={`/jobsulationtopic/bankMath/${item.title}`}
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

export default BankMath;
