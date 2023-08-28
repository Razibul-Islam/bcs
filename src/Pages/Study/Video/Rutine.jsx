import React, { useEffect, useState } from "react";

const Rutine = () => {
  const [rutineData, setRutineData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/get-video-rutin")
      .then((res) => res.json())
      .then((data) => setRutineData(data));
  }, []);

  return (
    <div className="p-5 max-w-6xl mx-auto">
      <h1 className="text-center my-4 text-lg text-white">রুটিন</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-3">
        {rutineData.map((rutine) => (
          <div className="text-white shadow-sm shadow-white rounded-md p-4 bg-teal-500">
            <h2 className="text-center text-xl font-semibold">{rutine.date}</h2>
            <h1 className="text-2xl font-semibold text-center my-3">
              {rutine.title}
            </h1>
            <p className="text-sm text-center">{rutine.topics}</p>
            <p className="text-sm text-center mt-3">{rutine.descripetion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rutine;
