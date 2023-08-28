import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PreparationForGreadExamList = () => {
  const [question, setQuestion] = useState([]);

  const handleDelete = (_id) => {
    fetch(
      `http://localhost:5000/delete-grade-preparation-modeltest?_id=${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Delete Successful");
        }
      });
  };

  useEffect(() => {
    const url = `http://localhost:5000/get-grade-preparation-eaxma-all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestion(data));
  }, []);

  return (
    <div className="p-5">
      <h1 className="my-10 text-center">Exam List </h1>

      <section className="grid grid-cols-4 gap-5">
        {question.map((qsn) => {
          return (
            <div className="p-5 text-center border border-dashed rounded">
              <h4>Bank</h4>
              <h5 className="my-2">{qsn.startDate}</h5>
              <div>
                <button
                  onClick={() => handleDelete(qsn._id)}
                  className="bg-red-500 px-5 rounded-3xl text-white text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PreparationForGreadExamList;
