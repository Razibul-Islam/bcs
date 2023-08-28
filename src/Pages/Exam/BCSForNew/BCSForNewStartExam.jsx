import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Auth/Firebase.int";
import { useNavigate } from "react-router-dom";

const BCSForNewStartExam = () => {
  const [question, setQuestion] = useState({});
  let index = 1;
  const [wrong, setWrong] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [user, loading, error] = useAuthState(auth);
  const [participate, setParticipate] = useState([]);
  const navigate = useNavigate();

  const [times, setTimes] = useState(0);
  const [remainingTime, setRemainingTime] = useState(times * 60);

  useEffect(() => {
    const fetchedTimeFromDatabase = parseInt(question.time); // Replace with fetched value from your database
    setTimes(fetchedTimeFromDatabase);
    setRemainingTime(fetchedTimeFromDatabase * 60); // Convert minutes to seconds
  }, [question.time]);

  useEffect(() => {
    if (remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [remainingTime]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const date = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  const handleChexkQuestion = (ans, option, id) => {
    const div = document.getElementById(id);
    const btn = document.getElementById(id + option);
    btn.classList.add("bg-orange-300");
    div.classList.add("bg-slate-100");
    if (div) {
      const buttons = div.getElementsByTagName("button");

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }

    console.log(ans, option);
    if (ans == option) {
      setCorrectAns(correctAns + 1);
    } else {
      setWrong(wrong + 1);
    }
  };

  // console.log(user)

  const submitExam = () => {
    const totalCorrectAns = correctAns;
    const totalWrong = wrong;
    const examDate = date;
    const userName = user.displayName;
    const userEmail = user.email;
    const totalQuestion = question.examQuestion.length;
    const negativeMark = question.negativeMark;
    const data = {
      totalCorrectAns,
      totalWrong,
      examDate,
      userName,
      userEmail,
      totalQuestion,
      negativeMark
    };

    setParticipate((prev) => [...prev, userEmail]);

    fetch("http://localhost:5000/newbcs-result", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    let participate = question.participate;
    participate.push(userEmail);

    fetch(
      `http://localhost:5000/updated-newbcs-participet?_id=${question._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ participate }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const found = question?.participate?.find((email) => email === user?.email);

  if (found) {
    navigate("/already-attent-exam");
  }
  if (remainingTime === 1) {
    // submitExam()
    document.getElementById('btn').click()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        if (prevRemainingTime > 0) {
          return prevRemainingTime - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const url = `http://localhost:5000/Bcs-For-New-exam?startDate=${date}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data);
        setParticipate(data.participate);
      });
  }, []);

  return (
    <div className="p-5 max-w-6xl mx-auto relative">
      <div className="flex justify-between items-center sticky top-0 py-4 bg-white">
        <button
          onClick={submitExam}
          className="px-5 py-2 bg-green-500 text-white rounded-sm shadow-lg"
          id='btn'
        >
          Submit
        </button>
        <p className="animate-ping text-red-500"> {formattedTime}</p>
      </div>

      <div className="max-w-xl mx-auto  p-5">
        {question?.examQuestion?.map((qsn) => {
          return (
            <div className="my-5 bg-slate-100 ">
              <h4 className="font-bold p-3">
                {index++ + ""}){qsn.question}
              </h4>
              <hr className="my-2" />
              <div className="cursor-not-allowed" id={qsn._id}>
                <button
                  onClick={() => handleChexkQuestion(qsn.ans, "a", qsn._id)}
                  id={qsn._id + "a"}
                  className="block py-3 px-5 hover:bg-teal-300 w-full text-start flex justify-start items-center gap-3"
                >
                  <span className="border border-black rounded-full h-6 w-6 block flex justify-center items-center   p-1">
                    ক
                  </span>{" "}
                  {qsn.opA}
                </button>
                <button
                  onClick={() => handleChexkQuestion(qsn.ans, "b", qsn._id)}
                  id={qsn._id + "b"}
                  className="block py-3 px-5 hover:bg-teal-300 w-full text-start flex justify-start items-center gap-3"
                >
                  <span className="border border-black rounded-full h-6 w-6 block flex justify-center items-center   p-1">
                    খ
                  </span>{" "}
                  {qsn.opB}
                </button>
                <button
                  onClick={() => handleChexkQuestion(qsn.ans, "c", qsn._id)}
                  id={qsn._id + "c"}
                  className="block py-3 px-5 hover:bg-teal-300 w-full text-start flex justify-start items-center gap-3"
                >
                  <span className="border border-black rounded-full h-6 w-6 block flex justify-center items-center   p-1">
                    গ
                  </span>{" "}
                  {qsn.opC}
                </button>
                <button
                  onClick={() => handleChexkQuestion(qsn.ans, "d", qsn._id)}
                  id={qsn._id + "d"}
                  className="block py-3 px-5 hover:bg-teal-300 w-full text-start flex justify-start items-center gap-3"
                >
                  <span className="border border-black rounded-full h-6 w-6 block flex justify-center items-center   p-1">
                    ঘ
                  </span>{" "}
                  {qsn.opD}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BCSForNewStartExam;
