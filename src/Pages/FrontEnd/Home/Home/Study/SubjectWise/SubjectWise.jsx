import React from "react";
import { Link } from "react-router-dom";

const SubjectWise = () => {
  return (
    <div className="p-5">
      <h1 className="text-center my-4 text-lg text-teal-500">
        বিষয়ভিত্তিক প্রশ্ন
      </h1>
      <div className="my-20  max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="text-center h-40 p-5 text-white  flex justify-center flex-col items-center rounded shadow-lg bg-teal-500">
          <p className="mt-3 text-xl">বাংলা সাহিত্য</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopi/bengaliliterature"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">বাংলা ভাষা ও ব্যাকরণ</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/banglaGrammer"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">English Literature</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/english"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">English Language</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/englishLanguage"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">বাংলাদেশ বিষয়াবলি</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/bangladeshiMatters"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">আন্তর্জাতিক বিষয়াবলি</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/internationalMatters"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">ভূগোল ও দুর্যোগ ব্যবস্থাপনা</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/geography"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">নৈতিকতা ,মূল্যবোধ ও সুশাসন</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/governance"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">সাধারণ বিজ্ঞান</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/basicScience"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">কম্পিউটার ও তথ্যপ্রযুক্তি</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/computer"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">সাধারণ গণিত</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/basicmath"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">মানসিক দক্ষতা</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/mentalSkill"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">Bank Math</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/bankMath"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">Bank English</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/bankEnglish"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">Bank Science and ICT</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/bankscience"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">Bank BD Affairs</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/bankbdaffiar"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">Bank International Affairs</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/bankinternationalaffiar"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">জাতীয় ও আন্তর্জাতিক দিবস ও প্রতিপাদ্য</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/nationalandInternatioanl"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
        <div className="text-center h-40 bg-teal-500 text-white p-5  flex justify-center flex-col items-center rounded shadow-lg">
          <p className="mt-3 text-xl">পরিবর্তনশীল তথ্য</p>
          <p className="flex justify-between text-sm w-4/6 my-2">
            <span>SubTopics: 57</span>
            <span>Questions: 1253</span>
          </p>
          <div className="flex space-x-3 items-center text-xs">
            <Link className="px-2 py-1 bg-teal-800/90 rounded-full">
              View All Questions
            </Link>
            <Link
              to="/jobsulationtopic/variabledata"
              className="px-2 py-1 bg-teal-800/70 rounded-full"
            >
              All Topics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectWise;
