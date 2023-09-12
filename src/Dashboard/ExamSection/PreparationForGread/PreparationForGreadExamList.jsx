import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";

const PreparationForGreadExamList = () => {
  const [question, setQuestion] = useState([]);
  const [deletedQuestion, setDeletedQuestion] = useState({});
  const [viewedQuestion, setViewedQuestion] = useState({});
  const [modal, setModal] = useState('hidden');
  const [modal2, setModal2] = useState('hidden');
  const [modal3, setModal3] = useState('hidden');
  const [deletee, setDeletee] = useState(false)

  const handleDelete = (_id) => {
    const url = `http://localhost:5000/gread-preparation-exam-one?_id=${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDeletedQuestion(data));

    if (deletee) {
      fetch(`http://localhost:5000/delete-free-modeltest?_id=${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Delete Successful");
          }
        });
    }
  };

  const handleEdit = () => {

  }

  const handleView = (_id) => {
    const url = `http://localhost:5000/gread-preparation-exam-one?_id=${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setViewedQuestion(data));
  }

  const handlePDF = (_id) => {
    const url = `http://localhost:5000/gread-preparation-exam-one?_id=${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setViewedQuestion(data));
  }

  useEffect(() => {
    const url = `http://localhost:5000/get-grade-preparation-eaxma-all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestion(data));
  }, []);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="p-5">
      <h1 className="my-10 text-center">Exam List </h1>

      <section className="grid grid-cols-4 gap-5">
        {question.map((qsn) => {
          return (
            <div className="p-5 text-center border border-dashed rounded">
              <h4>Bank</h4>
              <h5 className="my-2">{qsn.startDate}</h5>
              <div className="space-x-2">
                <button
                  onClick={() => { handleDelete(qsn._id); setModal("block") }}
                  className="bg-red-500 px-5 rounded-3xl text-white text-sm"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(qsn._id)}
                  className="bg-gray-400 px-5 rounded-3xl text-white text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => { handleView(qsn._id); setModal2("block") }}
                  className="bg-gray-500 px-5 rounded-3xl text-white text-sm"
                >
                  View
                </button>
                <button
                  onClick={() => { handlePDF(qsn._id); setModal3("block") }}
                  className="bg-gray-500 px-5 rounded-3xl text-white text-sm"
                >
                  PDF
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* deleted Modal */}

      <div class={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center">
          <section className="flex h-[600px] items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <article className="relative h-full overflow-scroll transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[600px]">
              <header className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    {deletedQuestion.examQuestion &&
                      deletedQuestion.examQuestion.map((qsn, index) => (
                        <div className="my-10" id={qsn._id} key={qsn._id}>
                          <p>
                            {index + 1}) {qsn.question}
                          </p>
                          <div>
                            <button
                              className={`py-2 block w-full text-start hover:bg-teal-100 cursor-pointer`}
                            >
                              ক) {qsn.opA}
                            </button>
                            <button
                              className={`py-2 block w-full text-start hover:bg-teal-100 cursor-pointer`}
                            >
                              খ) {qsn.opB}
                            </button>
                            <button
                              className={`py-2 block w-full text-start hover:bg-teal-100 cursor-pointer`}
                            >
                              গ) {qsn.opC}
                            </button>
                            <button
                              className={`py-2 block w-full text-start hover:bg-teal-100 cursor-pointer`}
                            >
                              ঘ) {qsn.opD}
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </header>
              <footer className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 sticky bottom-0 left-0">
                <button
                  onClick={() => {
                    setModal('hidden');
                    setDeletee(true);
                  }}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500 sm:mt-0 sm:w-auto ml-2"
                >
                  Delete Exam
                </button>
                <button
                  onClick={() => setModal('hidden')}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </footer>
            </article>
          </section>
        </div>
      </div>

      {/* Viewed Modal */}

      <div class={`relative z-10 ${modal2}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center">
          <section className="flex h-[600px] items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <article className="relative h-full overflow-scroll transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[600px]">
              <header className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    {viewedQuestion.examQuestion &&
                      viewedQuestion.examQuestion.map((qsn, index) => (
                        <div className="my-10" id={qsn._id} key={qsn._id}>
                          <p>
                            {index + 1}) {qsn.question}
                          </p>
                          <div>
                            <button
                              className={`py-2 block w-full text-start hover:bg-teal-100 cursor-pointer`}
                            >
                              ক) {qsn.opA}
                            </button>
                            <button
                              className={`py-2 block w-full text-start hover:bg-teal-100 cursor-pointer`}
                            >
                              খ) {qsn.opB}
                            </button>
                            <button
                              className={`py-2 block w-full text-start hover:bg-teal-100 cursor-pointer`}
                            >
                              গ) {qsn.opC}
                            </button>
                            <button
                              className={`py-2 block w-full text-start hover:bg-teal-100 cursor-pointer`}
                            >
                              ঘ) {qsn.opD}
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </header>
              <footer className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 sticky bottom-0 left-0">
                {/* <button
                  onClick={() => {
                    setModal2('hidden');
                    setDeletee(true);
                  }}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500 sm:mt-0 sm:w-auto ml-2"
                >
                  Delete Exam
                </button> */}
                <button
                  onClick={() => setModal2('hidden')}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </footer>
            </article>
          </section>
        </div>
      </div>

      {/* PDF Modal */}

      <div class={`relative z-10 ${modal3}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center">
          <section className="flex h-[600px] items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <article className="relative h-full overflow-scroll transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[600px]">
              <header className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" ref={componentRef}>
                    {viewedQuestion.examQuestion &&
                      viewedQuestion.examQuestion.map((qsn, index) => (
                        <div className="my-10 shadow-md p-4" id={qsn._id} key={qsn._id}>
                          <p>
                            {index + 1}) {qsn.question}
                          </p>
                          <div className="w-full">
                            <button
                              className={`py-2 block w-full text-start hover:bg-teal-100 cursor-pointer ${qsn.ans === "a" ? "bg-green-400" : ""}`}
                            >
                              ক) {qsn.opA}
                            </button>
                            <button
                              className={`py-2 block w-full text-start hover:bg-teal-100 cursor-pointer ${qsn.ans === "b" ? "bg-green-400" : ""}`}
                            >
                              খ) {qsn.opB}
                            </button>
                            <button
                              className={`py-2 block w-full text-start hover:bg-teal-100 cursor-pointer ${qsn.ans === "c" ? "bg-green-400" : ""}`}
                            >
                              গ) {qsn.opC}
                            </button>
                            <button
                              className={`py-2 block w-full text-start hover:bg-teal-100 cursor-pointer ${qsn.ans === "d" ? "bg-green-400" : ""}`}
                            >
                              ঘ) {qsn.opD}
                            </button>
                          </div>
                          <p>
                            {qsn.explain}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </header>
              <footer className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 sticky bottom-0 left-0">
                <button
                  onClick={() => handlePrint()}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500 sm:mt-0 sm:w-auto ml-2"
                >
                  Download PDF
                </button>
                <button
                  onClick={() => setModal3('hidden')}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </footer>
            </article>
          </section>
        </div>
      </div>

    </div>
  );
};

export default PreparationForGreadExamList;
