import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const JobSulationResultSingle = () => {
  const [result, setResult] = useState({});
  const [position, setPosition] = useState([]);
  const [pashed, setPashed] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    fetch(`https://bcspioneer.vercel.app/get-single-Job-Solution-result?_id=${_id}`)
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, [_id]);
  console.log(result);

  useEffect(() => {
    fetch(
      `https://bcspioneer.vercel.app/Job-Solution-merit-list?examDate=${result.examDate}`
    )
      .then((res) => res.json())
      .then((data) => setPosition(data));
  }, [result]);
  useEffect(() => {
    fetch(
      `https://bcspioneer.vercel.app/Job-Solution-passhed?examDate=${result.examDate}&cuts=${result.cutsark}`
    )
      .then((res) => res.json())
      .then((data) => setPashed(data));
  }, [result]);

  const targetEmail = result.userEmail;
  const targetIndex = position.findIndex(
    (item) => item.userEmail === targetEmail
  );

  return (
    <div className="md:p-5">
      <div className="max-w-xl mx-auto ">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-teal-100 py-4 text-center">
            <p>মোট পরীক্ষার্থীর সংখ্যা</p>
            <span className="flex justify-center items-center gap-3">
              <PeopleIcon className="text-teal-600"></PeopleIcon>
              {position.length}
            </span>
          </div>
          <div className="bg-teal-200 py-4 text-center">
            <p>উত্তীর্ণ শিক্ষার্থীর সংখ্যা</p>
            <span className="flex justify-center items-center gap-3">
              <CheckCircleIcon className="text-green-500" />
              {pashed.length}
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto my-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-pink-200 py-4 text-center">
            <p>কাট মার্ক</p>
            <span className="flex justify-center items-center gap-3">
              <PeopleIcon className="text-teal-600"></PeopleIcon>
              {result.cutsark}
            </span>
          </div>
          <div className="bg-pink-100 py-4 text-center">
            <p>আপনার মার্কস</p>
            <span className="flex justify-center items-center gap-3">
              <CheckCircleIcon className="text-green-500" />
              {result.totalCorrectAns}
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto ">
        <div className="">
          <div className="bg-orange-100 py-4 text-center">
            <p>মার্কস অনুযায়ী আপনার অবস্থান</p>
            <span className="flex justify-center items-center gap-3">
              <PeopleIcon className="text-teal-600"></PeopleIcon>
              {targetIndex + 1}
            </span>
          </div>
        </div>
      </div>

      <h2 className="my-5 text-center">Mark sheet</h2>
      <div className="max-w-xl mx-auto ">
        <table>
          <tr>
            <th>বিষয়</th>
            <th>সঠিক</th>
            <th>ভুল</th>
            <th>মার্ক</th>
            <th>মোট</th>
          </tr>
          <tr>
            <td>ফ্রী সাপ্তাহিক মডেল টেস্ট</td>
            <td>{result.totalCorrectAns}</td>
            <td>{result.totalWrong}</td>
            <td>{result.totalCorrectAns}</td>
            <td>{result.totalQuestion}</td>
          </tr>
        </table>
      </div>

      <div className="text-center mt-10">
        <Link className="bg-teal-500 px-5 text-white my-2 rounded-sm">
          উত্তরপত্র দেখুন
        </Link>
        <br />
        <br />
        <Link className="bg-teal-500 px-5 text-white my-2 rounded-sm">
          মেধা তালিকা দেখুন
        </Link>
      </div>
    </div>
  );
};

export default JobSulationResultSingle;
