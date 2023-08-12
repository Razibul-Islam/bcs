import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useParams } from "react-router-dom";

const InternationalMattersInner = () => {
  const [eyeOn, setEyeOn] = useState(true);
  const [data, setData] = useState([]);
  const [on, setOn] = useState(false);

  const { section } = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/get-question-sub-topic-job-sulation?subTopic=${section}&question_id=jst101`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [section]);
  // console.log(data);
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
    <div className="max-w-6xl mx-auto mt-10 px-5">
      <div className="flex justify-between px-5">
        <h1 className="mb-2 text-lg">বাংলা সাহিত্য</h1>
        <p onClick={() => setOn(!on)}>
          {eyeOn ? (
            <RemoveRedEyeIcon onClick={() => setEyeOn(!eyeOn)} />
          ) : (
            <VisibilityOffIcon onClick={() => setEyeOn(!eyeOn)} />
          )}
        </p>
      </div>
      {data.map((singleData, i) => (
        <div key={i}>
          <div className="border border-teal-600 rounded-md p-5 bg-neutral-300/30 mb-5">
            <h1 className="text-xl font-semibold mb-2">
              <span>{i + 1}.</span>
              {singleData.question}
            </h1>
            <ul className="space-y-1 text-base">
              <li
                className={`${
                  on && "a" === singleData.ans ? "text-green-500" : ""
                }`}
                id={`${singleData._id + "a"}`}
              >
                ক) {singleData.opA}
              </li>
              <li
                className={`${
                  on && "b" === singleData.ans ? "text-green-500" : ""
                }`}
                id={`${singleData._id + "b"}`}
              >
                খ) {singleData.opB}
              </li>
              <li
                className={`${
                  on && "c" === singleData.ans ? "text-green-500" : ""
                }`}
                id={`${singleData._id + "c"}`}
              >
                গ) {singleData.opC}
              </li>
              <li
                className={`${
                  on && "d" === singleData.ans ? "text-green-500" : ""
                }`}
                id={`${singleData._id + "d"}`}
              >
                ঘ) {singleData.opD}
              </li>
            </ul>
            <div className="space-x-3 mt-3">
              <p
                onClick={() =>
                  handleShowQuestion(singleData._id + singleData.ans)
                }
                className="border border-teal-600 py-1 px-4 rounded-full inline cursor-pointer"
              >
                উত্তর
              </p>
              <p className="border border-teal-600 py-1 px-4 rounded-full inline cursor-pointer">
                <FavoriteIcon />
              </p>
              <p
                onClick={() => handleShowExplain(singleData._id)}
                className="border border-teal-600 py-1 px-4 rounded-full inline cursor-pointer"
              >
                ব্যাখ্যা
              </p>
            </div>
            <p className="hidden mt-3" id={singleData._id}>
              {singleData.explain}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InternationalMattersInner;
