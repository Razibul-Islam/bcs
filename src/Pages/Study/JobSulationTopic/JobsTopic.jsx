import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const JobsTopic = () => {
  const { subject } = useParams();
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    const url = `https://bcspioneer.vercel.app/get-jobs-topic?subject=${subject}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTopic(data));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-center my-10">{subject}</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-3">
        {topic.map((topics) => {
          return (
            <div className="p-5 text-center shadow-lg rounded-sm">
              <h4 className="my-4">{topics.topic}</h4>
              <div className="flex justify-center gap-3">
                <Link
                  to={`/jobs-question-topic/${topics.topic}`}
                  className="bg-teal-500 px-4 py-1 rounded-full text-white text-sm"
                >
                  View Question
                </Link>
                <Link
                  to={`/jobs-subtopic/${topics.topic}`}
                  className="bg-teal-500 px-4 py-1 rounded-full text-white text-sm"
                >
                  View Sub Topic
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobsTopic;
