import React, { useState } from "react";
import { Link } from "react-router-dom";
const CentralArchive = () => {

  return (
    <div>
      <div className="w-96 mx-auto mt-10">
        <Link to="/centralArcive/Free-Weekly" className="bg-teal-500 block mt-3 text-center py-1 text-white rounded-3xl">ফ্রী পরীক্ষা</Link>
        <Link to="/centralArcive/BcsNew" className="bg-teal-500 block mt-3 text-center py-1 text-white rounded-3xl">নতুনদের বিসিএস প্রস্তুতি</Link>
        <Link to="/centralArcive/SubjectWise" className="bg-teal-500 block mt-3 text-center py-1 text-white rounded-3xl">বিষয় ভিত্তিক প্রস্তুতি</Link>
        <Link to="/centralArcive/JobSolution" className="bg-teal-500 block mt-3 text-center py-1 text-white rounded-3xl">জব সল্যুশন</Link>
        <Link to="/centralArcive/bank" className="bg-teal-500 block mt-3 text-center py-1 text-white rounded-3xl">ব্যাংক নিয়োগ প্রস্তুতি</Link>
        <Link to="/centralArcive/Teacher" className="bg-teal-500 block mt-3 text-center py-1 text-white rounded-3xl">শিক্ষক নিয়োগ ও নিবন্ধন</Link>
        <Link to="/centralArcive/Experience" className="bg-teal-500 block mt-3 text-center py-1 text-white rounded-3xl">অভিজ্ঞদের বিসিএস প্রস্তুতি</Link>
        <Link to="/centralArcive/Gread" className="bg-teal-500 block mt-3 text-center py-1 text-white rounded-3xl">৯ম - ২০ তম গ্রেডের প্রস্তুতি</Link>
      </div>
    </div>
  );
};

export default CentralArchive;
