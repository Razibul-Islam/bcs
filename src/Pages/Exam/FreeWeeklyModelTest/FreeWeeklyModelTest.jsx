// to='/free-weakly-model-test/rutin'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FreeWeeklyModelTest = () => {

  const [question, setQuestion] = useState({})

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`



  useEffect(() => {
    const url = `http://localhost:5000/get-free-wakly-exam?startDate=${date}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setQuestion(data))
}, [date])

  return (
    <div>
      <h1 className='my-5 text-center '> ফ্রি সাপ্তাহিক মডেল টেস্ট</h1>


      <div>
      <div className="">
        <div className="w-[300px]  h-[200px]  mx-auto mt-10 relative flex items-center justify-center">
          <Link  to='/free-weally-start-exam'className={`text-white px-5 py-2 bg-pink-500 rounded-3xl shadow-md z-10 ${question._id ? '':'hidden'}`}>
            Start Exam
          </Link>
          <Link  className={`text-white px-5 py-2 bg-pink-500 rounded-sm shadow-md z-10 ${question._id ? 'hidden':''}`}>
            এই মুহূর্তে কোনো পরীক্ষা নেই
          </Link>
          <Link  to='/free-weakly-model-test/rutin' className="absolute text-white w-24 text-center py-2 bg-[#e74c3c]  rounded-3xl shadow-md top-0 left-0">
            রুটিন
          </Link>
          <span className="absolute w-[70px]  h-[2px] bg-blue-400 rotate-45 top-16  left-14 "></span>
          <Link to='/free-weakly-result' className="absolute text-white  w-24 text-center py-2 bg-[#2ecc71]  rounded-3xl shadow-md top-0 right-0">
            ফলাফল
          </Link>
          <span className="absolute w-[70px]  h-[2px] bg-orange-400 -rotate-45 top-16  right-14"></span>
          <Link to='/free-weakly-model-test/archive' className="absolute text-white  w-24 text-center py-2 bg-[#f39c12]  rounded-3xl shadow-md bottom-0 left-0">
            আর্কাইভ
          </Link>
          <span className="absolute w-[70px]  h-[2px] bg-pink-400 -rotate-45 bottom-16  left-14"></span>
          <span className="absolute text-white  w-24 text-center py-2 bg-[#9b59b6]  rounded-3xl shadow-md bottom-0 right-0">
            মেরিট লিস্ট
          </span>
          <span className="absolute w-[70px]  h-[2px] bg-teal-400 rotate-45 bottom-16 4 right-14 "></span>
        </div>
      </div>
      <div className="text-center  text-lg mt-10">
        <p>দৃষ্টি আকর্ষণ !</p>
        <p>-পরীক্ষার টপিক জানতে রুটিনে ক্লিক করুন।</p>
        <p>-পূর্বে অনুষ্ঠিত পরীক্ষা গুলোর প্রশ্ন দেখতে আর্কাইভ এ ক্লিক করুন।</p>
      </div>
    </div>


    </div>
  );
};

export default FreeWeeklyModelTest;