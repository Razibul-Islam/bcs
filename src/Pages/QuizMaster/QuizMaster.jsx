import React, { useState } from "react";
import Select from "react-select";

const QuizMaster = () => {
  const [data, setData] = useState([]);
  const [currect, setCurrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [modal, setModal] = useState("hidden");
  const [liDisable, setLiDisable] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [time, setTime] = useState("");

  const options = [
    { value: "বাংলা সাহিত্য", label: "বাংলা সাহিত্য" },
    { value: "বাংলা ভাষা ও ব্যাকরণ", label: "বাংলা ভাষা ও ব্যাকরণ" },
    { value: "English Literature", label: "English Literature" },
    { value: "English Language", label: "English Language" },
    { value: "বাংলাদেশ বিষয়াবলি", label: "বাংলাদেশ বিষয়াবলি" },
    { value: "আন্তর্জাতিক বিষয়াবলি", label: "আন্তর্জাতিক বিষয়াবলি" },
    {
      value: "ভূগোল ও দুর্যোগ ব্যবস্থাপনা",
      label: "ভূগোল ও দুর্যোগ ব্যবস্থাপনা",
    },
    {
      value: "নৈতিকতা ,মূল্যবোধ ও সুশাসন",
      label: "নৈতিকতা ,মূল্যবোধ ও সুশাসন",
    },
    { value: "সাধারণ বিজ্ঞান", label: "সাধারণ বিজ্ঞান" },
    {
      value: "কম্পিউটার ও তথ্যপ্রযুক্তি",
      label: "কম্পিউটার ও তথ্যপ্রযুক্তি",
    },
    { value: "সাধারণ গণিত", label: "সাধারণ গণিত" },
    { value: "মানসিক দক্ষতা", label: "মানসিক দক্ষতা" },
    { value: "Bank Math", label: "Bank Math" },
    { value: "Bank English", label: "Bank English" },
    { value: "Bank Science and ICT", label: "Bank Science and ICT" },
    { value: "Bank BD Affairs", label: "Bank BD Affairs" },
    {
      value: "Bank International Affairs",
      label: "Bank International Affairs",
    },
    {
      value: "জাতীয় ও আন্তর্জাতিক দিবস ও প্রতিপাদ্য",
      label: "জাতীয় ও আন্তর্জাতিক দিবস ও প্রতিপাদ্য",
    },
    { value: "পরিবর্তনশীল তথ্য", label: "পরিবর্তনশীল তথ্য" },
  ];

  const initialRemainingTime = 5 * 60;

  const [remainingTime, setRemainingTime] = useState(initialRemainingTime);
  console.log(remainingTime);
  const handleCountDown = () => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        if (prevRemainingTime > 0) {
          return prevRemainingTime - 1;
        } else {
          setLiDisable(true);
          clearInterval(interval);
          setModal("block");
          setAnswer(!answer);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  };
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  const handleQuestion = (e) => {
    e.preventDefault();
    const number = e.target.numberOfQuiz.value;
    const subject = e.target.subject.value;

    fetch(`http://localhost:5000/quiz-master?size=${number}&subject=${subject}`)
      .then((res) => res.json())
      .then((data) => setData(data));

    document.getElementById("numberBox").style.display = "none";
    handleCountDown();
  };

  const currectAnswer = (option, answer, id) => {
    var div = document.getElementById(id);
    var buttons = div.querySelectorAll("li");
    buttons.forEach(function (li) {
      li.classList.add("pointer-events-none");
      li.classList.add("opacity-50");
    });

    document.getElementById(id + option).style.backgroundColor = "yellow";

    if (option === answer) {
      setCurrect(currect + 1);
    } else {
      setWrong(wrong + 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <form
        id="numberBox"
        onSubmit={handleQuestion}
        className="px-5 md:px-0 mt-5"
      >
        <div className="flex gap-5 flex-wrap md:flex-nowrap">
          <select
            name="quiz"
            className="w-full border border-teal-500 rounded-md py-1"
          >
            <option value="Random Quiz">Random Quiz [Total Database]</option>
          </select>
          <Select
            isMulti
            name="subject"
            options={options}
            className="w-full border border-teal-500 rounded-md"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap mt-3 gap-5">
          <select
            className="w-full border border-teal-500 rounded-md px-2 py-2 outline-none"
            name="numberOfQuiz"
            onChange={(e) => setTime(e.target.value)}
          >
            <option value={null}>--Select Quiz Number--</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
          <select
            className="w-full border border-teal-500 rounded-md px-2 py-2 outline-none"
            name="ExamTime"
          >
            <option
              value={
                time === "20"
                  ? "5"
                  : time === "30"
                  ? "7:30"
                  : time === "40"
                  ? "10"
                  : `${null}`
              }
            >
              {time === "20"
                ? "5"
                : time === "30"
                ? "7:30"
                : time === "40"
                ? "10"
                : "Select an option"}
            </option>
          </select>
          <button className="w-full bg-teal-300 px-4 rounded-md py-2">
            Start Quiz
          </button>
        </div>
      </form>

      <div className="flex justify-end">
        <div>{formattedTime}</div>
      </div>

      <div className="mt-10">
        {data.map((singleData, i) => (
          <div key={i}>
            <div className="border border-teal-600 rounded-md p-5  mb-5">
              <h1 className="text-xl font-semibold mb-2">
                <span>{i + 1}.</span>
                {singleData.question}
              </h1>
              <ul id={singleData._id} className="space-y-2 text-base">
                <li
                  className={`cursor-pointer py-3 my-2 hover:bg-teal-200 ${
                    liDisable ? "pointer-events-none opacity-50" : ""
                  } ${
                    answer && "a" === singleData.ans
                      ? "bg-green-500 pointer-events-none"
                      : ""
                  }`}
                  id={singleData._id + "a"}
                  onClick={() =>
                    currectAnswer("a", singleData.ans, singleData._id)
                  }
                >
                  ক) {singleData.opA}
                </li>
                <li
                  className={`cursor-pointer py-3 my-2 hover:bg-teal-200 ${
                    liDisable ? "pointer-events-none opacity-50" : ""
                  } ${
                    answer && "b" === singleData.ans
                      ? "bg-green-500 pointer-events-none"
                      : ""
                  }`}
                  id={singleData._id + "b"}
                  onClick={() =>
                    currectAnswer("b", singleData.ans, singleData._id)
                  }
                >
                  খ) {singleData.opB}
                </li>
                <li
                  className={`cursor-pointer py-3 my-2 hover:bg-teal-200 ${
                    liDisable ? "pointer-events-none opacity-50" : ""
                  } ${
                    answer && "c" === singleData.ans
                      ? "bg-green-500 pointer-events-none"
                      : ""
                  }`}
                  id={singleData._id + "c"}
                  onClick={() =>
                    currectAnswer("c", singleData.ans, singleData._id)
                  }
                >
                  গ) {singleData.opC}
                </li>
                <li
                  className={`cursor-pointer py-3 my-2 hover:bg-teal-200 ${
                    liDisable ? "pointer-events-none opacity-50" : ""
                  } ${
                    answer && "d" === singleData.ans
                      ? "bg-green-500 pointer-events-none"
                      : ""
                  }`}
                  id={singleData._id + "d"}
                  onClick={() =>
                    currectAnswer("d", singleData.ans, singleData._id)
                  }
                >
                  ঘ) {singleData.opD}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          className="bg-teal-500 px-4 py-2 rounded-sm text-white mb-10"
          onClick={() => setModal("block")}
          disabled={data.length === wrong + currect ? false : true}
        >
          Submit
        </button>
      </div>
      {/* modal  */}
      <div
        className={`relative z-10 ${modal}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div>
                  <h1 className="flex justify-center text-xl items-center gap-4">
                    Your Result
                  </h1>
                  <p>Total Question : {data.length}</p>
                  <p>Correct Answer : {currect}</p>
                  <p>Wrong Answer : {wrong}</p>
                  <div className="flex justify-end items-center gap-5 mt-5">
                    <label
                      onClick={() => setModal("hidden")}
                      className="px-4 py-1 text-white uppercase rounded-sm bg-red-500 cursor-pointer"
                    >
                      Cancel
                    </label>
                    <label
                      onClick={() => {
                        setAnswer(true);
                        setModal("hidden");
                      }}
                      className="px-4 py-1 text-white uppercase rounded-sm bg-green-500 cursor-pointer"
                    >
                      All Answer
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizMaster;
