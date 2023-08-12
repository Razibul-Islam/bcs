import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubjectWise = () => {

  const [subject, setSubject] = useState([]);


  useEffect(()=>{
    const url = `http://localhost:5000/get-subject-read-topiclly`;
    fetch(url)
    .then(res => res.json())
    .then(data => setSubject(data))
},[])


  return (
    <div className="p-5">
      <h1 className="text-center my-4 text-lg text-teal-500">
        বিষয়ভিত্তিক প্রশ্ন
      </h1>
      <div className="my-20  max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          subject.map(subjects => {
            return(
              <div className="shadow-xl p-5 text-center">
                  <h3 className="my-3">{subjects.subject}</h3>
                  <div>
                      <Link to={`${subjects.subject}`} className="px-2 py-1 bg-teal-500 text-sm mx-2 rounded-full text-white">View Question</Link>
                      <button className="px-2 py-1 bg-teal-500 text-sm mx-2 rounded-full text-white">View Topic</button>
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default SubjectWise;
