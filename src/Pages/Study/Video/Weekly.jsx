import React, { useEffect, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";

const Weekly = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://bcspioneer.vercel.app/get-study-video?section=Weekly%20Bulletin")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // console.log(data);

  return (
    <div className="p-5">
      <h1 className="text-center my-4 text-lg">সাপ্তাহিক বুলেটিন</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {data.map((singleData, i) => (
          <div key={i} className="shadow-md p-4">
            <div className="text-xs space-x-1">
              <span className="px-2 py-1 bg-teal-800/30 rounded-full">
                {singleData.category}
              </span>
              <span className="px-2 py-1 bg-teal-800/30 rounded-full">
                {singleData.section}
              </span>
            </div>
            <div className="flex mt-4 mb-2 gap-3 items-start flex-col">
              <div className="w-full">
                <video
                  src={`https://${singleData._video}`}
                  className="rounded"
                  controls
                ></video>
              </div>
              <div>
                <h1>{singleData.title}</h1>
                <p className="text-sm">Episode - {singleData.epsode}</p>
                <p className="text-sm">
                  তারিখ : তারিখ : {new Date(singleData.time).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="text-xs space-x-1">
              <a
                href={`https://${singleData._video}`}
                className="px-2 py-1 bg-teal-800/30 rounded-full"
                target="_blank"
                rel="noreferrer noopener"
                download={true}
              >
                Video <DownloadIcon className="scale-75" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weekly;
