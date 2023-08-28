import React, { useEffect, useState } from "react";

const PdfRutine = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/get-pdf-rutine")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // console.log(data);
  return (
    <div className="p-5 max-w-6xl mx-auto">
      <h1 className="text-center my-4 text-lg">রুটিন</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {data.map((rutine, i) => (
          <div
            key={i}
            className="text-white shadow-sm shadow-white rounded-md p-4 bg-teal-500"
          >
            <h2 className="text-center text-xl font-semibold">{rutine.date}</h2>
            <h1 className="text-2xl font-semibold text-center my-3">
              {rutine.title}
            </h1>
            <p className="text-sm text-center">{rutine.descripetion}</p>
            <p className="text-sm text-center mt-3">{rutine.topics}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfRutine;
