import React, { useEffect, useState } from "react";

const BCSForExperienceRoutine = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/experience-bcs")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="p-5 max-w-6xl mx-auto">
      <h1 className="text-center my-4 text-lg">BCS For Experience Routine</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {data.map((rd) => (
          <div
            key={rd._id}
            className="text-center p-5 border border-dashed h-40 rounded"
          >
            <h5>{rd.footer}</h5>
            <h4 className="text-sm">{rd.title}</h4>
            {rd.descripetion?.split("...").map((p) => (
              <h4 className="text-sm">{p}</h4>
            ))}

            <small>ফ্রি সাপ্তাহিক মডেল টেস্ট প্রতি শুক্রবার সকলের জন্য</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BCSForExperienceRoutine;
