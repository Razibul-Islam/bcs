import React from "react";
import { Link } from "react-router-dom";

const EnglishLanguage = () => {
  const data = [
    { _id: 1, title: "Parts of Speech" },
    { _id: 2, title: "Idioms and Phrases" },
    { _id: 3, title: "Tense" },
    { _id: 4, title: "Vocabulary or Words" },
    { _id: 5, title: "Clause" },
    { _id: 6, title: "Voice" },
    { _id: 7, title: "Narration and Degree" },
    { _id: 8, title: "Fill in the Blanks and Sentence Correction" },
    { _id: 9, title: "Sentence and Transformation" },
    { _id: 10, title: "Composition" },
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

export default EnglishLanguage;
