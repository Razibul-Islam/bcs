import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Auth/Firebase.int";
import { toast } from "react-toastify";

const JobSulationPastQuestion = () => {
  const [question, setQuestion] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const { category } = useParams();
  let index = 1;
  const [eyeOn, setEyeOn] = useState(false);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const url = `http://localhost:5000/jobs-past-question?category=${category}&question_id=pastQ101`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestion(data));
  }, []);

  const handleShowExplain = (id) => {
    const element = document.getElementById(id);
    element.classList.toggle("hidden");
  };

  const handleShowQuestion = (ans) => {
    const option = document.getElementById(ans);
    option.style.fontWeight = "700";
    // console.log(option);
  };

  const handleFavorite = (question) => {
    const email = user.email;
    question.email = email;

    const data = {
      question: question.question,
      opA: question.opA,
      opB: question.opB,
      opC: question.opC,
      opD: question.opD,
      explain: question.explain,
      ans: question.ans,
      email: question.email,
      id: question._id,
    };

    fetch(`http://localhost:5000/add-favorite?id=${question._id}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((data) => {
      console.log(data);
      if (data.status === 409) {
        toast("Already Exist");
      } else {
        toast("Favorite added Successfully");
      }
    });
  };

  // const handleFavorite = (question) => {
  //   const email = user.email; // Make sure 'user' is defined and contains the user's email.
  
  //   const data = {
  //     question: question.question,
  //     opA: question.opA,
  //     opB: question.opB,
  //     opC: question.opC,
  //     opD: question.opD,
  //     explain: question.explain,
  //     ans: question.ans,
  //     email: email, // Use the 'email' variable here.
  //     id: question._id,
  //   };
  
  //   fetch(`http://localhost:5000/add-favorite?id=${question._id}`, {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         // Handle server errors or other non-successful status codes here.
  //         throw new Error("Failed to add favorite");
  //       }
  //       return response.json(); // Parse the response data as JSON.
  //     })
  //     .then((responseData) => {
  //       if (responseData.message === "Already Exist") {
  //         toast("Already Exist");
  //       } else {
  //         toast("Favorite added Successfully");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error adding favorite:", error);
  //       // Handle network errors or other errors here.
  //       toast("Failed to add favorite");
  //     });
  // };
  

  return (
    <div>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl text-center">{category}</h1>
        <p>মোট প্রশ্নঃ {question.length} টি</p>
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
                  className={`flex  items-center gap-3 my-2${eyeOn && "a" === qs.ans
                      ? "text-green-500 font-extrabold"
                      : ""
                    }`}
                >
                  <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                    ক
                  </p>
                  {qs.opA}
                </p>
                <p
                  id={`${qs._id + "b"}`}
                  className={`flex  items-center gap-3 my-2${eyeOn && "b" === qs.ans
                      ? "text-green-500 font-extrabold"
                      : ""
                    }`}
                >
                  <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                    খ
                  </p>
                  {qs.opB}
                </p>
                <p
                  id={`${qs._id + "c"}`}
                  className={`flex  items-center gap-3 my-2${eyeOn && "c" === qs.ans
                      ? "text-green-500 font-extrabold"
                      : ""
                    }`}
                >
                  <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                    গ
                  </p>
                  {qs.opC}
                </p>
                <p
                  id={`${qs._id + "d"}`}
                  className={`flex items-center gap-3 my-2${eyeOn && "d" === qs.ans
                      ? "text-green-500 font-extrabold"
                      : "text-black"
                    }`}
                >
                  <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                    ঘ
                  </p>
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
                <p
                  onClick={() => handleFavorite(qs)}
                  className="border border-teal-600 py-1 px-4 rounded-full inline cursor-pointer"
                >
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

export default JobSulationPastQuestion;
