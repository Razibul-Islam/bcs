import React from "react";

const BCSForNew = () => {
  return (
    <div>
      <div className="w-full h-[400px]">
        <div className="w-[300px] md:w-[400px] h-[200px] md:h-[300px] mx-auto mt-10 relative flex items-center justify-center">
          <p className="text-white px-5 py-2 bg-teal-500 rounded-sm shadow-md z-10">
            Start Exam
          </p>
          <span className="absolute text-white w-24 text-center py-2 bg-[#e74c3c] rounded-sm shadow-md top-0 left-0">
            রুটিন
          </span>
          <span className="absolute w-[50px] md:w-[160px] h-[2px] bg-blue-400 rotate-45 top-16 md:top-24 left-14 "></span>
          <span className="absolute text-white  w-24 text-center py-2 bg-[#2ecc71] rounded-sm shadow-md top-0 right-0">
            ফলাফল
          </span>
          <span className="absolute w-[50px] md:w-[160px] h-[2px] bg-orange-400 -rotate-45 top-16 md:top-24 right-14"></span>
          <span className="absolute text-white  w-24 text-center py-2 bg-[#f39c12] rounded-sm shadow-md bottom-0 left-0">
            আর্কাইভ
          </span>
          <span className="absolute w-[50px] md:w-[160px] h-[2px] bg-pink-400 -rotate-45 bottom-16 md:bottom-24 left-14"></span>
          <span className="absolute text-white  w-24 text-center py-2 bg-[#9b59b6] rounded-sm shadow-md bottom-0 right-0">
            মেরিট লিস্ট
          </span>
          <span className="absolute w-[50px] md:w-[160px] h-[2px] bg-teal-400 rotate-45 bottom-16 md:bottom-24 right-14 "></span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center space-y-2 text-lg">
        <p>দৃষ্টি আকর্ষণ</p>
        <p>এই মুহূর্তে এই বাটনে কোনো লাইভ পরীক্ষা নেই</p>
        <p>পরবর্তী পরীক্ষা</p>
        <p>Friday</p>
        <p>-পরীক্ষার টপিক জানতে রুটিনে ক্লিক করুন।</p>
        <p>-পূর্বে অনুষ্ঠিত পরীক্ষা গুলোর প্রশ্ন দেখতে আর্কাইভ এ ক্লিক করুন।</p>
      </div>
    </div>
  );
};

export default BCSForNew;