import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const BankModelTest = () => {
  const [topic, setTopic] = useState([]);
  const [subTopic, setSubTopic] = useState([]);
  const [alQuestionm, setAllQuestion] = useState([]);
  const [question, setQuestion] = useState([]);
  let index = 1;
  const [ans, setAns] = useState("");

  const [modal, setModal] = useState("hidden");

  const handleSearch = () => {
    const keyword = document.getElementById("search-box").value;
    const url = `http://localhost:5000/smart-search?keyword=${keyword}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAllQuestion(data);
        }
      });
    console.log(keyword);
  };

  const handleShowall = () => {
    const url = `http://localhost:5000/get-all-question`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllQuestion(data));
  };

  const handleAddQue3stion = (qsn) => {
    const targetObject = question.find((item) => item._id === qsn._id);
    if (targetObject) {
      toast.warning("Already Exigist");
    } else {
      setQuestion((prev) => [...prev, qsn]);
    }
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const question = e.target.question.value;
    const opA = e.target.opA.value;
    const opB = e.target.opB.value;
    const opC = e.target.opC.value;
    const opD = e.target.opD.value;
    const data = { question, opA, opB, opC, opD, ans };
    setQuestion((prev) => [...prev, data]);
    setModal("hidden");
    e.target.reset();
  };

  const handleCreateExam = (e) => {
    e.preventDefault();
    const examQuestion = question;
    const time = e.target.time.value;
    const startDate = e.target.startDate.value;
    const negativeMark = e.target.negativeMark.value
    const cutsark = e.target.cutsark.value;
    const participate = [];

    const data = {
      examQuestion,
      time,
      startDate,
      participate,
      cutsark,
      negativeMark
    };
    // console.log(data);
    fetch("http://localhost:5000/bank-preparation-exam", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Exam question added successful");
      });
    window.location.reload();
  };

  const handleTopic = () => {
    const topic = document.getElementById('topic').value;
    const url = `http://localhost:5000/get-question-by-topic?topic=${topic}&question_id=readtopicaly101`;
    fetch(url)
      .then(res => res.json())
      .then(data => setAllQuestion(data));
  }


  const handleSubtopic = () => {
    const subTopic = document.getElementById('subTopic').value;
    const url = `http://localhost:5000/get-question-by-subtopic?subTopic=${subTopic}&question_id=readtopicaly101`;
    fetch(url)
      .then(res => res.json())
      .then(data => setAllQuestion(data));
  }

  useEffect(() => {
    const url = `http://localhost:5000/get-all-question`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllQuestion(data));
  }, []);

  useEffect(() => {
    const url = `http://localhost:5000/get-topic-read-topiclly`;
    fetch(url)
      .then(res => res.json())
      .then(data => setTopic(data))
  }, [])
  useEffect(() => {
    const url = `http://localhost:5000/get-subTopic-read-topiclly`;
    fetch(url)
      .then(res => res.json())
      .then(data => setSubTopic(data))
  }, [])

  return (
    <div className="p-5">
      <h1 className="text-center my-5">Bank</h1>
      <div className="flex justify-between items-center">
        <div className='flex gap-5 w-1/2'>
          <Link
            to="/dashboard/bank-preparation/routine"
            className="bg-orange-500 px-5 py-1 text-white rounded-sm shadow-lg"
          >
            Rutine
          </Link>
          <Link className="bg-yellow-400 px-5 py-1 text-white rounded-sm shadow-lg">
            Examinee
          </Link>
          <Link to="/dashboard/bank-preparation/examList" className="bg-pink-500 px-5 py-1 text-white rounded-sm shadow-lg">
            Exam List
          </Link>
          <button
            onClick={() => setModal(!modal)}
            className="bg-purple-600 text-white px-5 py-1 rounded-sm shadow-lg"
          >
            Add New Question
          </button>
        </div>

        <div className='flex gap-2 grid grid-cols-4 w-1/2'>
          <select name="topic" id='topic' onChange={handleTopic} className='p-1 border  block focus:outline-none w-full'>
            <option value="--টপিক নির্বাচন করুণ --">--টপিক নির্বাচন করুণ --</option>
            {
              topic.map(subjects => <option>{subjects.topic}</option>)
            }
          </select>
          <select name="subTopic" onChange={handleSubtopic} id='subTopic' className='p-1 border  block focus:outline-none w-full'>
            <option value="--টপিক নির্বাচন করুণ --">--সাব টপিক নির্বাচন করুণ --</option>
            {
              subTopic.map(op => <option>{op.subtopic}</option>)
            }
          </select>
          <input type="search" onChange={handleSearch} id='search-box' className='px-2 block border rounded-full focus:outline-none' placeholder='Find Question' />
          <button onClick={handleShowall} className='bg-orange-500 px-2 text-sm py-1 text-white rounded-sm shadow-lg'>All</button>
        </div>
      </div>

      <section className="flex justify-between gap-5">
        <div className="w-1/2 border-r mt-10 shadow-lg p-5">
          <div>
            <h2 className="text-center">Bank Question</h2>
            <p className="text-center">Total Mcq : {question.length}</p>
            <hr className="my-5" />
            <form onSubmit={handleCreateExam} className="my-5">
              <input
                type="text"
                placeholder="Enter Time (Minute)"
                name="time"
                className="p-2 border  block focus:outline-none w-full mb-3"
              />
              <input
                type="text"
                placeholder="Cuts Mark"
                name="cutsark"
                className="p-2 border  block focus:outline-none w-full mb-3"
              />
              <input type="text" placeholder='Negative Mark' name='negativeMark' className='p-2 border  block focus:outline-none w-full mb-3' />
              <small>Exam Date</small>
              <input
                type="date"
                name="startDate"
                className="p-2 border  block focus:outline-none w-full"
              />
              <button className="bg-green-500 px-5 py-1 shadow mt-5 rounded text-white">
                Submit
              </button>
            </form>
          </div>
          <div>
            {question.map((qs) => {
              return (
                <div className="p-3 border border-dashed my-5">
                  <h4>
                    {index++}) {qs.question}
                  </h4>
                  <div className="mt-3">
                    <p className="flex  items-center gap-3 my-2">
                      <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                        ক
                      </p>
                      {qs.opA}
                    </p>
                    <p className="flex  items-center gap-3 my-2">
                      <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                        খ
                      </p>
                      {qs.opB}
                    </p>
                    <p className="flex  items-center gap-3 my-2">
                      <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                        গ
                      </p>
                      {qs.opC}
                    </p>
                    <p className="flex  items-center gap-3 my-2">
                      <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                        ঘ
                      </p>
                      {qs.opD}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/2 border-l mt-10 shadow-lg p-5">
          <div className="text-center">
            <h2>প্রশ্ন তৈরি করুণ</h2>
          </div>
          <div>
            {alQuestionm.map((qs) => {
              return (
                <div className="p-3 border border-dashed my-5">
                  <h4>
                    {index++}) {qs.question}
                  </h4>
                  <div className="mt-3">
                    <p className="flex  items-center gap-3 my-2">
                      <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                        ক
                      </p>
                      {qs.opA}
                    </p>
                    <p className="flex  items-center gap-3 my-2">
                      <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                        খ
                      </p>
                      {qs.opB}
                    </p>
                    <p className="flex  items-center gap-3 my-2">
                      <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                        গ
                      </p>
                      {qs.opC}
                    </p>
                    <p className="flex  items-center gap-3 my-2">
                      <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                        ঘ
                      </p>
                      {qs.opD}
                    </p>
                  </div>
                  <button
                    onClick={() => handleAddQue3stion(qs)}
                    className="bg-green-500 mt-2 text-white px-5 py-1 rounded-sm shadow-lg"
                  >
                    Add
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* modal  */}
      <div
        class={`relative z-10 ${modal}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div>
                  <p className="flex justify-start items-center gap-4">
                    বিগত জব সলিউশন প্রশ্ন যোগ করুণ
                  </p>
                  <form onSubmit={handleAddQuestion} className="my-5">
                    <input
                      type="text"
                      name="question"
                      placeholder="প্রশ্ন প্রবেশ করান"
                      className="p-2 border  block focus:outline-none w-full"
                    />
                    <div className="my-4 grid grid-cols-2 gap-4">
                      <label className="flex items-center mt-2">
                        <p className="p-2 border  block focus:outline-none w-10">
                          <span className="bg-black w-6 h-6  flex items-center justify-center rounded-full text-white">
                            ক
                          </span>
                        </p>
                        <input
                          type="text"
                          name="opA"
                          className="p-2 border  block focus:outline-none w-full"
                          placeholder="অপশন"
                        />
                        <label
                          onClick={() => setAns("a")}
                          htmlFor="a"
                          className="p-2 border  block focus:outline-none w-10 cursor-pointer"
                        >
                          <input type="radio" name="ans" id="a" />
                        </label>
                      </label>
                      <label className="flex items-center mt-2">
                        <p className="p-2 border  block focus:outline-none w-10">
                          <span className="bg-black w-6 h-6  flex items-center justify-center rounded-full text-white">
                            খ
                          </span>
                        </p>
                        <input
                          type="text"
                          name="opB"
                          className="p-2 border  block focus:outline-none w-full"
                          placeholder="অপশন"
                        />
                        <label
                          onClick={() => setAns("b")}
                          htmlFor="b"
                          className="p-2 border  block focus:outline-none w-10 cursor-pointer"
                        >
                          <input type="radio" name="ans" id="b" />
                        </label>
                      </label>
                      <label className="flex items-center mt-2">
                        <p className="p-2 border  block focus:outline-none w-10">
                          <span className="bg-black w-6 h-6  flex items-center justify-center rounded-full text-white">
                            গ
                          </span>
                        </p>
                        <input
                          type="text"
                          name="opC"
                          className="p-2 border  block focus:outline-none w-full"
                          placeholder="অপশন"
                        />
                        <label
                          onClick={() => setAns("c")}
                          htmlFor="c"
                          className="p-2 border  block focus:outline-none w-10 cursor-pointer"
                        >
                          <input type="radio" name="ans" id="c" />
                        </label>
                      </label>
                      <label className="flex items-center mt-2">
                        <p className="p-2 border  block focus:outline-none w-10">
                          <span className="bg-black w-6 h-6  flex items-center justify-center rounded-full text-white">
                            ঘ
                          </span>
                        </p>
                        <input
                          type="text"
                          name="opD"
                          className="p-2 border  block focus:outline-none w-full"
                          placeholder="অপশন"
                        />
                        <label
                          onClick={() => setAns("d")}
                          htmlFor="d"
                          className="p-2 border  block focus:outline-none w-10 cursor-pointer"
                        >
                          <input type="radio" name="ans" id="d" />
                        </label>
                      </label>
                    </div>
                    <div className="flex justify-end items-center gap-5 mt-5">
                      <label
                        onClick={() => setModal("hidden")}
                        className="px-4 py-1 text-white uppercase rounded-sm bg-red-500 cursor-pointer"
                      >
                        Cancel
                      </label>
                      <button className="px-4 py-1 text-white uppercase rounded-sm bg-green-500">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankModelTest;
