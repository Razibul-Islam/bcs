import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FreeWeaklyModelTestArchive = () => {
  const [archive, seTArchive] = useState([]);

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const date = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  useEffect(() => {
    const url = `http://localhost:5000/get-freeweakly-archive?date=${date}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => seTArchive(data));
  }, []);

  return (
    <div>
      <h1 className="my-5 text-center">Free weakly Model Test Archive</h1>

      <div className="mt-10">
        {archive.map((question) => {
          return (
            <div className="text-center mt-5">
              <Link
                to={`/free-waekly-archive/${question._id}`}
                className="bg-teal-500  px-5  py-1 text-white mt-3 rounded-full "
              >
                {question.startDate} (ফ্রি সাপ্তাহিক মডেল টেস্ট)
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FreeWeaklyModelTestArchive;
