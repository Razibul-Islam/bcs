import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobSulation = () => {
  const [subject, setSubject] = useState([]);


  useEffect(() => {
    const url = `http://localhost:5000/get-subject-read-jobs`;
    fetch(url)
      .then(res => res.json())
      .then(data => setSubject(data))
  }, [])

  return (
    <div className="p-5">
      <h1 className="text-center my-4 text-lg"> বিগত জব সল্যুশন প্রশ্ন</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-5">
          {
            subject.map(sub=> {
              return(
                <div className="p-5 text-center shadow-lg">
                  <h4 className="my-3">{sub.subject}</h4>
                  <div className="flex gap-3 justify-center">
                    <Link to={`/jobs-question-subject/${sub.subject}`} className="bg-teal-500 px-3 py-1 text-white rounded-full text-sm">View Question</Link>
                    <Link to={`/jobs-topic/${sub.subject}`} className="bg-teal-500 px-3 py-1 text-white rounded-full text-sm">View Topic</Link>
                  </div>
                </div>
              )
            })
          }
      </div>
    </div>
  );
};

export default JobSulation;
