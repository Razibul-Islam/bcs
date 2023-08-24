import React, { useEffect, useState } from 'react';

const QuizMaster = () => {

  const [modalOne, setModalOne] = useState('hidden');
  const [result, setResult] = useState('hidden');
  const [question, setQuestion] = useState([]);
  const [subject, setSubject] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [modalTwo, setMopdalTwo] = useState('hidden');

  const [sub, setSub] = useState([])


  let index = 1;
  const handleStartExam = () => {
    const size = document.getElementById('size').value;
    const time = document.getElementById('time').value;
    document.getElementById('action').classList.remove('hidden')
    const url = `http://localhost:5000/quiz-master?size=${size}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setQuestion(data))
    setModalOne('hidden');

    const countdownElement = document.getElementById("countdown");
    let timeInSeconds = parseInt(time) * 60;
    console.log(timeInSeconds);

    function updateCountdown() {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;

      countdownElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      if (timeInSeconds > 0) {
        timeInSeconds--;
        setTimeout(updateCountdown, 1000); // Update every second
      } else {
        countdownElement.innerHTML = "Time's up!";
      }
    }
    updateCountdown()
  }


  const handleCheckQuestion = (op, ans, _id) => {
    console.log(op, ans);
    if (op == ans) {
      setCorrect(correct + 1)
    } else {
      setWrong(wrong + 1)
    }
    const element = document.getElementById(op + _id);
    element.classList.add('bg-orange-200');
    const buttonContainer = document.getElementById(_id);
    const buttons = buttonContainer.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }

  }




  const handleStartExamSubjectWise = ()=>{
    const size = document.getElementById('numberofquestion').value;
    const url = `http://localhost:5000/questions?subject=${sub.join(',')}&size=${size}`;
    // const url = `${baseUrl}`;
    const time = document.getElementById('times').value;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => setQuestion(data))
    setMopdalTwo('hidden');
    document.getElementById('action').classList.remove('hidden')
    const countdownElement = document.getElementById("countdown");
    let timeInSeconds = parseInt(time) * 60;
    console.log(timeInSeconds);

    function updateCountdown() {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;

      countdownElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      if (timeInSeconds > 0) {
        timeInSeconds--;
        setTimeout(updateCountdown, 1000); // Update every second
      } else {
        countdownElement.innerHTML = "Time's up!";
      }
    }
    updateCountdown()
  }


  const handlleSubject = ()=>{
    const subjects = document.getElementById('subject').value;
    setSub(prev => [...sub , subjects])
  }


  useEffect(() => {
    const url = `http://localhost:5000/get-subject-read-topiclly`;
    fetch(url)
        .then(res => res.json())
        .then(data => setSubject(data))
}, [])

  return (
    <div className='p-5 max-w-xl mx-auto'>
      <div className='w-96 mx-auto p-5'>
        <button onClick={() => setModalOne('block')} className='bg-teal-500 text-white text-center w-full py-2 rounded-sm shadow-lg'>Start Random Quiz</button>
        <button onClick={() => setMopdalTwo('block')} className='bg-gradient-to-tr from-teal-500 to-green-300 mt-5  text-white text-center w-full py-2 rounded-sm shadow-lg'>Start Subject wise</button>
      </div>
      <div className='hidden flex justify-between border-y border-dashed py-4' id='action' >
        <div id="countdown"></div>
        <button onClick={()=>  setResult('block')} className='px-5 py-1  bg-green-500 text-white'>Submit</button>
      </div>
      <div className='my-10 max-w-xl mx-auto p-5'>
        {
          question.map(qsn => {
            return (
              <div className='my-10' id={qsn._id}>
                <p>{index++})  {qsn.question}</p>
                <div>
                  <button onClick={() => handleCheckQuestion('a', qsn.ans, qsn._id)} id={'a' + qsn._id} className='py-2 block hover:bg-teal-100 cursor-pointer'>ক) {qsn.opA}</button>
                  <button onClick={() => handleCheckQuestion('b', qsn.ans, qsn._id)} id={'b' + qsn._id} className='py-2 block hover:bg-teal-100 cursor-pointer'>খ) {qsn.opB}</button>
                  <button onClick={() => handleCheckQuestion('c', qsn.ans, qsn._id)} id={'c' + qsn._id} className='py-2 block hover:bg-teal-100 cursor-pointer'>গ) {qsn.opC}</button>
                  <button onClick={() => handleCheckQuestion('d', qsn.ans, qsn._id)} id={'d' + qsn._id} className='py-2 block hover:bg-teal-100 cursor-pointer'>ঘ) {qsn.opD}</button>
                </div>
              </div>
            )
          })
        }
      </div>






      <div class={`relative z-10 ${modalTwo}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div className='flex gap-2'>
                      {
                        sub.map(ss => <button className='bg-teal-500 text-sm  px-2 rounded-xl'>{ss}</button>)
                      }
                    </div>
                   <select className='px-5 py-2 border focus:outline-none w-full mt-3' onChange={handlleSubject} id="subject">
                    <option>-- বিষয় নির্বাচন করুণ--</option>
                    {
                      subject.map(sub=> <option>{sub.subject}</option>)
                    }
                   </select>
                    <input type="number" id='times' className='px-5 py-2 border focus:outline-none w-full mt-3' placeholder='Exam Time (Minutes)' />
                    <input type="number" id='numberofquestion' className='px-5 py-2 border focus:outline-none w-full mt-3' placeholder='Number of Question' />
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button onClick={handleStartExamSubjectWise} type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Submit</button>
                <button onClick={() => setMopdalTwo('hidden')} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class={`relative z-10 ${modalOne}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <input type="number" id='size' className='px-5 py-2 border focus:outline-none w-full' placeholder='Number Of question' />
                    <input type="number" id='time' className='px-5 py-2 border focus:outline-none w-full mt-3' placeholder='Exam Time (Minutes)' />
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button onClick={handleStartExam} type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Submit</button>
                <button onClick={() => setModalOne('hidden')} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>







      <div class={`relative z-10 ${result}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <p>Total Question: {question.length}</p>
                    <p>Currect Answer: {correct}</p>
                    <p>Wrong Answer: {wrong}</p>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                <a href=''  type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizMaster;