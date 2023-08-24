import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Auth/Firebase.int";
import { Link } from "react-router-dom";

const BCSForExperienceResult = () => {
  const [result, setresult] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user && user.email) {
      const url = `http://localhost:5000/experience-bcs-result?userEmail=${user.email}`;
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
            <p>অভিজ্ঞদের বিসিএস প্রস্তুতি</p>
            <Link
              to={`/bcsforexperienceresult/${res._id}`}
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

export default BCSForExperienceResult;