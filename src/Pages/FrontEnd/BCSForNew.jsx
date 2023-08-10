import React from "react";
import { Link } from "react-router-dom";

const BCSForNew = () => {
  return (
    <div>
      <h1 className="my-10 text-center">নতুনদের জন্য বিসিএস</h1>
      <Link
        to="/daily-quiz"
        className="bg-[#ffae0b] text-center px-5 py-1 rounded-3xl w-60 mx-auto block text-white my-2"
      >
        ডেইলি কুইজ
      </Link>
      <Link
        to="/BCS-For-New-All-Syllbus"
        className="bg-[#ffae0b] text-center px-5 py-1 rounded-3xl w-96 mx-auto block text-white my-2"
      >
        নতুনদের ৪৬ তম বিসিএস প্রস্তুতি - ২০০ দিনে পুরো সিলেবাস
      </Link>
    </div>
  );
};

export default BCSForNew;
