import React from "react";
import Select from "react-select";

const QuizMaster = () => {
  const options = [
    { value: "All Subject", label: "সকল বিষয়" },
    { value: "Bengali literature", label: "বাংলা সাহিত্য" },
    { value: "Bengali Language and Grammar", label: "বাংলা ভাষা ও ব্যাকরণ" },
    { value: "English Literature", label: "English Literature" },
    { value: "English Language", label: "English Language" },
    { value: "Bangladesh affairs", label: "বাংলাদেশ বিষয়াবলি" },
    { value: "International Affairs", label: "আন্তর্জাতিক বিষয়াবলি" },
    {
      value: "Geography and Disaster Management",
      label: "ভূগোল ও দুর্যোগ ব্যবস্থাপনা",
    },
    {
      value: "Ethics, values and good governance",
      label: "নৈতিকতা ,মূল্যবোধ ও সুশাসন",
    },
    { value: "General Science", label: "সাধারণ বিজ্ঞান" },
    {
      value: "Computers and Information Technology",
      label: "কম্পিউটার ও তথ্যপ্রযুক্তি",
    },
    { value: "General Mathematics", label: "সাধারণ গণিত" },
    { value: "Mental skills", label: "মানসিক দক্ষতা" },
    { value: "Bank Math", label: "Bank Math" },
    { value: "Bank English", label: "Bank English" },
    { value: "Bank Science and ICT", label: "Bank Science and ICT" },
    { value: "Bank BD Affairs", label: "Bank BD Affairs" },
    {
      value: "Bank International Affairs",
      label: "Bank International Affairs",
    },
    {
      value: "National and International Days and Themes",
      label: "জাতীয় ও আন্তর্জাতিক দিবস ও প্রতিপাদ্য",
    },
    { value: "variable data", label: "পরিবর্তনশীল তথ্য" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <form className="px-5 md:px-0 mt-5">
        <div className="flex gap-5 flex-wrap md:flex-nowrap">
          <select
            name="quiz"
            className="w-full border border-teal-500 rounded-md py-1"
          >
            <option value="Random Quiz">Random Quiz [Total Database]</option>
            <option value="Favorite Quiz">Favorite Questions Quiz</option>
            <option value="Wrong Quiz">Wrong Answered Quiz</option>
            <option value="Unanswered Quiz">Unanswered Quiz</option>
            <option value="Job Solution Quiz">Job Solution Quiz</option>
            <option value="Bank Job Solution Quiz">
              Bank Job Solution Quiz
            </option>
            <option value="RIght Answered Quiz">Right Answered Quiz</option>
          </select>
          <Select
            defaultValue={[options[0]]}
            isMulti
            name="subject"
            options={options}
            className="w-full border border-teal-500 rounded-md"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap mt-3 gap-5">
          <input
            type="number"
            placeholder="Number of questions"
            name="questionNumber"
            className="w-full border border-teal-500 rounded-md px-2 py-2 outline-none"
          />
          <input
            type="number"
            placeholder="Exam Time (minutes)"
            name="examTime"
            className="w-full border border-teal-500 rounded-md px-2 py-2 outline-none"
          />
          <button className="w-full bg-teal-300 px-4 rounded-md py-2">
            Start Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuizMaster;
