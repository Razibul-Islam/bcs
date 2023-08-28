// import React, { useEffect, useState } from "react";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// const LastBCS = () => {
//   const [eyeOn, setEyeOn] = useState(true);
//   const [data, setData] = useState([]);
//   const [on, setOn] = useState(false);
//   useEffect(() => {
//     fetch("http://localhost:5000/get-question?question_id=pastbcsquestion101")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);
//   // console.log(data);
//   const handleShowExplain = (id) => {
//     const element = document.getElementById(id);
//     if (element.classList[0] === "hidden") {
//       element.classList.remove("hidden");
//     } else {
//       element.classList.add("hidden");
//     }
//   };

//   const handleShowQuestion = (ans) => {
//     const option = document.getElementById(ans);
//     option.style.color = "green";
//     console.log(option);
//   };

//   const handleAddFavorite = (data) => {
//     const ans = data.ans;
//     const explain = data.explain;
//     const opA = data.opA;
//     const opB = data.opB;
//     const opC = data.opC;
//     const opD = data.opD;
//     const question = data.question;
//     const question_id = data.question_id;
//     const id = data._id;

//     const info = {ans, explain, opA , opB, opC, opD, question, question_id, id};
//     fetch('http://localhost:5000/add-favorite', {
//       method: "POST",
//       headers : {
//         'content-type': 'application/json'
//       },
//       body : JSON.stringify(info)
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//   }

//   return (
//     <div className="max-w-6xl mx-auto mt-10 px-5">
//       <div className="flex justify-between px-5">
//         <h1 className="mb-2 text-lg">বিগত বিসিএস প্রশ্ন</h1>
//         <p onClick={() => setOn(!on)}>
//           {eyeOn ? (
//             <RemoveRedEyeIcon onClick={() => setEyeOn(!eyeOn)} />
//           ) : (
//             <VisibilityOffIcon onClick={() => setEyeOn(!eyeOn)} />
//           )}
//         </p>
//       </div>
//       {data.map((singleData, i) => (
//         <div key={i}>
//           <div className="border border-teal-600 rounded-md p-5 bg-neutral-300/30 mb-5">
//             <h1 className="text-xl font-semibold mb-2">
//               <span>{i + 1}.</span>
//               {singleData.question}
//             </h1>
//             <ul className="space-y-1 text-base">
//               <li
//                 className={`${
//                   on && "a" === singleData.ans ? "text-green-500" : ""
//                 }`}
//                 id={`${singleData._id + "a"}`}
//               >
//                 ক) {singleData.opA}
//               </li>
//               <li
//                 className={`${
//                   on && "b" === singleData.ans ? "text-green-500" : ""
//                 }`}
//                 id={`${singleData._id + "b"}`}
//               >
//                 খ) {singleData.opB}
//               </li>
//               <li
//                 className={`${
//                   on && "c" === singleData.ans ? "text-green-500" : ""
//                 }`}
//                 id={`${singleData._id + "c"}`}
//               >
//                 গ) {singleData.opC}
//               </li>
//               <li
//                 className={`${
//                   on && "d" === singleData.ans ? "text-green-500" : ""
//                 }`}
//                 id={`${singleData._id + "d"}`}
//               >
//                 ঘ) {singleData.opD}
//               </li>
//             </ul>
//             <div className="space-x-3 mt-3">
//               <p
//                 onClick={() =>
//                   handleShowQuestion(singleData._id + singleData.ans)
//                 }
//                 className="border border-teal-600 py-1 px-4 rounded-full inline cursor-pointer"
//               >
//                 উত্তর
//               </p>
//               <button onClick={()=> handleAddFavorite(singleData)} className="border border-teal-600 py-1 px-4 rounded-full inline cursor-pointer">
//                 <FavoriteIcon />
//               </button>
//               <p
//                 onClick={() => handleShowExplain(singleData._id)}
//                 className="border border-teal-600 py-1 px-4 rounded-full inline cursor-pointer"
//               >
//                 ব্যাখ্যা
//               </p>
//             </div>
//             <p className="hidden mt-3" id={singleData._id}>
//               {singleData.explain}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LastBCS;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LastBCS = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bcs-past-category-get")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h1 className="text-center my-5 ">বিগত বিসিএস প্রশ্ন</h1>
      <div className="">
        {category.map((cate) => (
          <Link
            className=" bg-teal-500 w-72 block mx-auto my-3 text-center rounded-full py-1 text-white"
            to={`/lastbcs/${cate.category}`}
          >
            {cate.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LastBCS;
