import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";

const TopicForReadTopic = () => {
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [modalThree, setModalThree] = useState(false);

  const [subject, setSubject] = useState([]);
  const [topic, setTopic] = useState([]);
  const [subTopic, setSubTopic] = useState([]);

  const addSubject = (e) => {
    e.preventDefault();
    const subject = e.target.subject.value;
    const order = e.target.order.value;
    const data = { subject, order };

    fetch("http://localhost:5000/add-subject-read-topiclly", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setModalOne(false);
          e.target.reset();
          toast.success("Added Successfull");
        }
      });
  };

  const addTopic = (e) => {
    e.preventDefault();
    const subject = e.target.subject.value;
    const topic = e.target.topic.value;
    const data = { subject, topic };

    fetch("http://localhost:5000/add-topic-read-topiclly", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setModalTwo(false);
          e.target.reset();
          toast.success("Added Successfull");
        }
      });
  };
  const addSubTopic = (e) => {
    e.preventDefault();
    const subject = e.target.subject.value;
    const topic = e.target.topic.value;
    const subtopic = e.target.subtopic.value;
    const data = { subject, topic, subtopic };

    fetch("http://localhost:5000/add-subtopic-read-topiclly", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setModalThree(false);
          e.target.reset();
          toast.success("Added Successfull");
        }
      });
  };

  const handleDeleteSubject = (_id) => {
    const url = `http://localhost:5000/delete-subject-read-topiclly?_id=${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Delete Successfull");
      });
  };
  const handleDeleteTopic = (_id) => {
    const url = `http://localhost:5000/delete-topic-read-topiclly?_id=${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Delete Successfull");
      });
  };
  const handleDeleteSubTopic = (_id) => {
    const url = `http://localhost:5000/delete-subtopic-read-topiclly?_id=${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Delete Successfull");
      });
  };

  useEffect(() => {
    const url = `http://localhost:5000/get-subject-read-topiclly`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSubject(data));
  }, []);
  useEffect(() => {
    const url = `http://localhost:5000/get-topic-read-topiclly`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTopic(data));
  }, []);
  useEffect(() => {
    const url = `http://localhost:5000/get-subtopic-read-topiclly`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSubTopic(data));
  }, []);

  return (
    <section>
      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className=" border border-dashed h-96 ">
          <div className="text-center">
            <button
              onClick={() => setModalOne(true)}
              className="text-center bg-teal-500 px-5 py-1 rounded-3xl text-white my-3 "
            >
              Add Subject
            </button>
          </div>
          <hr />
          <div className="p-5">
            {subject.map((subjects) => (
              <div className="flex justify-between items-center px-2 py-2 rounded-sm w-full  hover:bg-teal-200">
                {subjects.subject}{" "}
                <button
                  onClick={() => handleDeleteSubject(subjects._id)}
                  className="text-red-400"
                >
                  <DeleteIcon></DeleteIcon>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className=" border border-dashed h-96 ">
          <div className="text-center">
            <button
              onClick={() => setModalTwo(true)}
              className="text-center bg-orange-500 px-5 py-1 rounded-3xl text-white my-3 "
            >
              Add Topic
            </button>
          </div>
          <hr />
          <div className="p-5">
            {topic.map((subjects) => (
              <div className="flex justify-between items-center px-2 py-2 rounded-sm w-full  hover:bg-teal-200">
                {subjects.topic}{" "}
                <button
                  onClick={() => handleDeleteTopic(subjects._id)}
                  className="text-red-400"
                >
                  <DeleteIcon></DeleteIcon>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className=" border border-dashed h-96 ">
          <div className="text-center">
            <button
              onClick={() => setModalThree(true)}
              className="text-center bg-[#ff9e3d] px-5 py-1 rounded-3xl text-white my-3 "
            >
              Add Sub-Topic
            </button>
          </div>
          <hr />
          <div className="p-5">
            {subTopic.map((subjects) => (
              <div className="flex justify-between items-center px-2 py-2 rounded-sm w-full  hover:bg-teal-200">
                {subjects.subtopic}{" "}
                <button
                  onClick={() => handleDeleteSubTopic(subjects._)}
                  className="text-red-400"
                >
                  <DeleteIcon></DeleteIcon>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* modal 1  */}
        <div
          class={`relative z-10 ${modalOne ? "" : "hidden"}`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <form
                  onSubmit={addSubject}
                  class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                >
                  <input
                    required
                    name="subject"
                    className="block w-full p-2 focus:outline-none border my-2"
                    type="text"
                    placeholder="Enter Subject Name "
                  />
                  <input
                    required
                    name="order"
                    className="block w-full p-2 focus:outline-none border my-2"
                    type="text"
                    placeholder="Enter Subject Order "
                  />
                  <div className="mt-5">
                    <button className="bg-teal-500 px-5 py-1 rounded-sm text-white font-bold">
                      Submit
                    </button>
                    <label
                      onClick={() => setModalOne(false)}
                      className="bg-red-500 px-5 py-1 rounded-sm mx-2 cursor-pointer text-white font-bold"
                    >
                      Cancel
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* modal 2 */}
        <div
          class={`relative z-10 ${modalTwo ? "" : "hidden"}`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <form
                  onSubmit={addTopic}
                  class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                >
                  <select
                    name="subject"
                    className="block w-full p-2 focus:outline-none border my-2"
                  >
                    <option value="null">--select subject --</option>
                    {subject.map((subjects) => (
                      <option>{subjects.subject}</option>
                    ))}
                  </select>
                  <input
                    required
                    name="topic"
                    className="block w-full p-2 focus:outline-none border my-2"
                    type="text"
                    placeholder="Enter Topic Name "
                  />
                  <div className="mt-5">
                    <button className="bg-teal-500 px-5 py-1 rounded-sm text-white font-bold">
                      Submit
                    </button>
                    <label
                      onClick={() => setModalTwo(false)}
                      className="bg-red-500 px-5 py-1 rounded-sm mx-2 cursor-pointer text-white font-bold"
                    >
                      Cancel
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* modal 3 */}
        <div
          class={`relative z-10 ${modalThree ? "" : "hidden"}`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <form
                  onSubmit={addSubTopic}
                  class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                >
                  <select
                    name="subject"
                    className="block w-full p-2 focus:outline-none border my-2"
                  >
                    <option value="null">--Select Subject --</option>
                    {subject.map((subjects) => (
                      <option>{subjects.subject}</option>
                    ))}
                  </select>
                  <select
                    name="topic"
                    className="block w-full p-2 focus:outline-none border my-2"
                  >
                    <option value="null">--Select Topic --</option>
                    {topic.map((subjects) => (
                      <option>{subjects.topic}</option>
                    ))}
                  </select>
                  <input
                    required
                    name="subtopic"
                    className="block w-full p-2 focus:outline-none border my-2"
                    type="text"
                    placeholder="Enter Sub Topic Name "
                  />
                  <div className="mt-5">
                    <button className="bg-teal-500 px-5 py-1 rounded-sm text-white font-bold">
                      Submit
                    </button>
                    <label
                      onClick={() => setModalThree(false)}
                      className="bg-red-500 px-5 py-1 rounded-sm mx-2 cursor-pointer text-white font-bold"
                    >
                      Cancel
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicForReadTopic;
