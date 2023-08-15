import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LastBCSQuestion = () => {
  let index = 1;
  const { category } = useParams();
  const [question, setQuestion] = useState([]);
  const [eyeOn, setEyeOn] = useState(false);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const url = `http://localhost:5000/bcs-past-question?category=${category}&question_id=pastbcsquestion101`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestion(data));

    console.log(url);
  }, []);

  const handleShowExplain = (id) => {
    const element = document.getElementById(id);
    if (element.classList[0] === "hidden") {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  };


  const handleShowQuestion = (ans) => {
    const option = document.getElementById(ans);
    option.style.color = "green";
    console.log(option);
  };

  return (
    <div>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl text-center">{category}</h1>
        <p onClick={() => setOn(!on)}>
          {eyeOn ? (
            <RemoveRedEyeIcon onClick={() => setEyeOn(!eyeOn)} />
          ) : (
            <VisibilityOffIcon onClick={() => setEyeOn(!eyeOn)} />
          )}
        </p>
      </div>


      <div className="my-20  max-w-6xl mx-auto">
        {question.map((qs) => {
          return (
            <div className="p-3 border border-dashed my-5">
              <h4>
                {index++}) {qs.question}
              </h4>
              <div className="mt-3">
                <p
                  id={`${qs._id + "a"}`}
                  className={`flex  items-center gap-3 my-2${
                    eyeOn && "a" === qs.ans
                      ? "text-green-500 font-extrabold"
                      : ""
                  }`}
                >
                  <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                    ক
                  </p>{" "}
                  {qs.opA}
                </p>
                <p
                  id={`${qs._id + "b"}`}
                  className={`flex  items-center gap-3 my-2${
                    eyeOn && "b" === qs.ans
                      ? "text-green-500 font-extrabold"
                      : ""
                  }`}
                >
                  <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                    খ
                  </p>{" "}
                  {qs.opB}
                </p>
                <p
                  id={`${qs._id + "c"}`}
                  className={`flex  items-center gap-3 my-2${
                    eyeOn && "c" === qs.ans
                      ? "text-green-500 font-extrabold"
                      : ""
                  }`}
                >
                  <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                    গ
                  </p>{" "}
                  {qs.opC}
                </p>
                <p
                  id={`${qs._id + "d"}`}
                  className={`flex items-center gap-3 my-2${
                    eyeOn && "d" === qs.ans
                      ? "text-green-500 font-extrabold"
                      : "text-black"
                  }`}
                >
                  <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                    ঘ
                  </p>{" "}
                  {qs.opD}
                </p>
              </div>
              <div className="space-x-3 mt-3">
                <p
                  onClick={() => handleShowQuestion(qs._id + qs.ans)}
                  className="border border-teal-600 py-1 px-4 rounded-full inline cursor-pointer"
                >
                  উত্তর
                </p>
                <p className="border border-teal-600 py-1 px-4 rounded-full inline cursor-pointer">
                  <FavoriteIcon />
                </p>
                <p
                  onClick={() => handleShowExplain(qs._id)}
                  className="border border-teal-600 py-1 px-4 rounded-full inline cursor-pointer"
                >
                  ব্যাখ্যা
                </p>
              </div>
              <p className="hidden mt-3" id={qs._id}>
                {qs.explain}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LastBCSQuestion;
