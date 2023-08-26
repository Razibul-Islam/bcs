import React, { useEffect, useState } from "react";

const PdfBangladesh = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://bcspioneer.vercel.app/get-study-pdf?section=বাংলাদেশ বিষয়াবলী")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="p-5">
      <h1 className="text-center my-4 text-lg">বাংলাদেশ বিষয়াবলি</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {data.map((singleData, i) => (
          <div key={i} className="text-center p-4 shadow-md">
            <h1 className="text-xl font-semibold mb-5">{singleData.title}</h1>

            <p className="text-sm mt-2">তারিখ : {singleData.time}</p>
            <a
              href={`https://${singleData._video}`}
              className="bg-teal-500 text-white px-5 py-3 text-center rounded-full mt-5 inline-block"
              download={true}
            >
              PDF Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfBangladesh;
