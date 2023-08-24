import React, { useState, useEffect } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Auth/Firebase.int";

const CentralFavorite = () => {
  const [eyeOn, setEyeOn] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState([]);
  const email = user?.email;

  // console.log(email);

  useEffect(() => {
    fetch(`http://localhost:5000/get-favorite?email=${email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [email]);

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
    // console.log(option);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-5">
      <div className="flex justify-between px-5">
        <h1 className="mb-2 text-lg">Central Favorite</h1>
        <p>
          {eyeOn ? (
            <RemoveRedEyeIcon onClick={() => setEyeOn(!eyeOn)} />
          ) : (
            <VisibilityOffIcon onClick={() => setEyeOn(!eyeOn)} />
          )}
        </p>
      </div>
      {data.map((favoriteData, i) => (
        <div
          key={favoriteData._id}
          className="border border-teal-600 rounded-md p-5 bg-neutral-300/30 mb-5"
        >
          <h1 className="text-xl font-semibold mb-2">
            <span>{i + 1}.</span>
            {favoriteData.question}
          </h1>
          <ul className="space-y-1 text-base">
            <li>
              <p
                id={`${favoriteData._id + "a"}`}
                className={`flex items-center gap-3 my-2${
                  eyeOn && "a" === favoriteData.ans
                    ? "text-green-500 font-extrabold"
                    : "text-black"
                }`}
              >
                <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                  ঘ
                </p>
                {favoriteData.opA}
              </p>
            </li>
            <li>
              <p
                id={`${favoriteData._id + "b"}`}
                className={`flex items-center gap-3 my-2${
                  eyeOn && "b" === favoriteData.ans
                    ? "text-green-500 font-extrabold"
                    : "text-black"
                }`}
              >
                <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                  ঘ
                </p>
                {favoriteData.opB}
              </p>
            </li>
            <li>
              <p
                id={`${favoriteData._id + "c"}`}
                className={`flex items-center gap-3 my-2${
                  eyeOn && "c" === favoriteData.ans
                    ? "text-green-500 font-extrabold"
                    : "text-black"
                }`}
              >
                <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                  ঘ
                </p>
                {favoriteData.opC}
              </p>
            </li>
            <li>
              <p
                id={`${favoriteData._id + "d"}`}
                className={`flex items-center gap-3 my-2${
                  eyeOn && "d" === favoriteData.ans
                    ? "text-green-500 font-extrabold"
                    : "text-black"
                }`}
              >
                <p className="bg-black rounded-full h-5 text-white flex justify-center items-center w-5">
                  ঘ
                </p>
                {favoriteData.opD}
              </p>
            </li>
          </ul>
          <div className="space-x-3 mt-3">
            <p
              onClick={() =>
                handleShowQuestion(favoriteData._id + favoriteData.ans)
              }
              className="border border-teal-600 py-1 px-4 rounded-full inline cursor-pointer"
            >
              উত্তর
            </p>

            <p
              onClick={() => handleShowExplain(favoriteData._id)}
              className="border border-teal-600 py-1 px-4 rounded-full inline cursor-pointer"
            >
              ব্যাখ্যা
            </p>
          </div>
          <p className="hidden mt-3" id={favoriteData._id}>
            {favoriteData.explain}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CentralFavorite;
