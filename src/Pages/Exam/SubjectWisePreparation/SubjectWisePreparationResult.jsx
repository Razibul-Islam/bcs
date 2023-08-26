import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Auth/Firebase.int";
import { Link } from "react-router-dom";

const SubjectWisePreparationResult = () => {
  const [result, setresult] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user && user.email) {
      const url = `https://bcspioneer.vercel.app/subject-wise-result?userEmail=${user?.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setresult(data));
    }
  }, [user]);
  return (
    <div className="p-5 grid gap-5 grid-cols-3 max-w-6xl mx-auto">
      {result.map((res) => {
        return (
          <div className="text-center p-5 border border-dashed ">
            <p>{res.examDate}</p>
            <p>বিষয় ভিত্তিক প্রস্তুতি</p>
            <Link
              to={`/subjectwisepreparationResult/${res._id}`}
              className="bg-teal-500 text-white px-5 rounded-3xl my-2"
            >
              view
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SubjectWisePreparationResult;
