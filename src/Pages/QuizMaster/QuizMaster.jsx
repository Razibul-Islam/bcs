import React, { useState } from "react";
// import Select from "react-select";

const QuizMaster = () => {
  const [data, setData] = useState([]);
  const [currect, setCurrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [modal, setModal] = useState("hidden");
  const [liDisable, setLiDisable] = useState(false);
  const [answer, setAnswer] = useState(false);

  // const options = [
  //   { value: "All Subject", label: "সকল বিষয়" },
  //   { value: "Bengali literature", label: "বাংলা সাহিত্য" },
  //   { value: "Bengali Language and Grammar", label: "বাংলা ভাষা ও ব্যাকরণ" },
  //   { value: "English Literature", label: "English Literature" },
  //   { value: "English Language", label: "English Language" },
  //   { value: "Bangladesh affairs", label: "বাংলাদেশ বিষয়াবলি" },
  //   { value: "International Affairs", label: "আন্তর্জাতিক বিষয়াবলি" },
  //   {
  //     value: "Geography and Disaster Management",
  //     label: "ভূগোল ও দুর্যোগ ব্যবস্থাপনা",
  //   },
  //   {
  //     value: "Ethics, values and good governance",
  //     label: "নৈতিকতা ,মূল্যবোধ ও সুশাসন",
  //   },
  //   { value: "General Science", label: "সাধারণ বিজ্ঞান" },
  //   {
  //     value: "Computers and Information Technology",
  //     label: "কম্পিউটার ও তথ্যপ্রযুক্তি",
  //   },
  //   { value: "General Mathematics", label: "সাধারণ গণিত" },
  //   { value: "Mental skills", label: "মানসিক দক্ষতা" },
  //   { value: "Bank Math", label: "Bank Math" },
  //   { value: "Bank English", label: "Bank English" },
  //   { value: "Bank Science and ICT", label: "Bank Science and ICT" },
  //   { value: "Bank BD Affairs", label: "Bank BD Affairs" },
  //   {
  //     value: "Bank International Affairs",
  //     label: "Bank International Affairs",
  //   },
  //   {
  //     value: "National and International Days and Themes",
  //     label: "জাতীয় ও আন্তর্জাতিক দিবস ও প্রতিপাদ্য",
  //   },
  //   { value: "variable data", label: "পরিবর্তনশীল তথ্য" },
  // ];

  const initialRemainingTime = 5 * 60;
  const [remainingTime, setRemainingTime] = useState(initialRemainingTime);
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
    setTotalQuestion(number);

    fetch(`http://localhost:5000/quiz-master?size=${number}`)
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

  if (liDisable) {
    console.log("disabled");
  }

  // console.log(allAnswer);

  return (
    <div className="max-w-6xl mx-auto">
      <form
        id="numberBox"
        onSubmit={handleQuestion}
        className="flex gap-5 mt-20 px-5 md:px-0"
      >
        <select
          className="w-full border border-teal-500 rounded-md px-2 py-2 outline-none"
          name="numberOfQuiz"
        >
          <option value={null}>--Select Quiz Number--</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
        <button className="w-full bg-teal-300 px-4 rounded-md py-2">
          Start Quiz
        </button>
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
                  } ${answer && "a" === singleData.ans ? "bg-green-500" : ""}`}
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
                  } ${answer && "b" === singleData.ans ? "bg-green-500" : ""}`}
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
                  } ${answer && "c" === singleData.ans ? "bg-green-500" : ""}`}
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
                  } ${answer && "d" === singleData.ans ? "bg-green-500" : ""}`}
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
          disabled={totalQuestion == wrong + currect ? false : true}
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
                  <p>Total Question : {totalQuestion}</p>
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
                      onClick={() => setAnswer(!answer)}
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