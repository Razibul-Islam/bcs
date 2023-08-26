import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const ReadTopicaly = () => {
    const [modal, setModal] = useState('hidden');
    const [ans, setAns] = useState('');
    const [question, setQuestion] = useState([]);
    let index = 1;
    const [subject, setSubject] = useState([]);
    const [topic, setTopic] = useState([]);
    const [subTopic, setSubTopic] = useState([]);


    const handleShowExplain = (id) => {
        const element = document.getElementById(id);
        if (element.classList[0] === 'hidden') {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    };



    const handleAddQuestion = (e) => {
        e.preventDefault();
        const subject = e.target.subject.value;
        const topic = e.target.topic.value;
        const subTopic = e.target.subTopic.value;
        const question = e.target.question.value;
        const opA = e.target.opA.value;
        const opB = e.target.opB.value;
        const opC = e.target.opC.value;
        const opD = e.target.opD.value;
        const explain = e.target.explain.value;
        const question_id = 'readtopicaly101'
        const data = { topic, subTopic, question, opA, opB, opC, opD, explain, ans, question_id, subject }
        console.log(data);
        fetch('https://bcspioneer.vercel.app/add-question', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('প্রশ্ন যোগ করা হয়েছে');
                setModal('hidden');
                e.target.reset();
            })
    };


    const filterByTopic = () => {
        const topic = document.getElementById('filter_topic').value;
        const url = `https://bcspioneer.vercel.app/get-question-topic-job-sulation?topic=${topic}&question_id=readtopicaly101`;
        fetch(url)
            .then(res => res.json())
            .then(data => setQuestion(data))
    }

    const handleAll = () => {
        const url = `https://bcspioneer.vercel.app/get-question?question_id=readtopicaly101`;
        fetch(url)
            .then(res => res.json())
            .then(data => setQuestion(data))
    }



    const handleDeleteQuestion = (_id) => {
        const url = `https://bcspioneer.vercel.app/delete-question?_id=${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('মুছে ফেলা হয়েছে');
                }
            });

    }

    useEffect(() => {
        const url = `https://bcspioneer.vercel.app/get-question?question_id=readtopicaly101`;
        fetch(url)
            .then(res => res.json())
            .then(data => setQuestion(data))
    }, [])
    useEffect(() => {
        const url = `https://bcspioneer.vercel.app/get-subject-read-topiclly`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSubject(data))
    }, [])
    useEffect(() => {
        const url = `https://bcspioneer.vercel.app/get-topic-read-topiclly`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTopic(data))
    }, [])
    useEffect(() => {
        const url = `https://bcspioneer.vercel.app/get-subtopic-read-topiclly`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSubTopic(data))
    }, [])


    return (
        <div className='p-5'>
            <h1 className='text-center my-5'>বিষয়ভিত্তিক পড়ুন</h1>
            <div className='flex justify-between items-center mt-10'>
                <button onClick={() => setModal('')} className='px-5 py-1 bg-slate-700 text-white rounded-3xl'>Add Question</button>
                <Link to='/dashboard/read-topic-add' className='px-5 py-1 bg-slate-700 text-white rounded-3xl'>Add Topic</Link>
                <div className='flex gap-3'>
                    <button className='px-5 py-1 bg-slate-700 text-white rounded-3xl' onClick={handleAll}>All</button>
                    <select onChange={filterByTopic} id="filter_topic" className='px-5 py-1 bg-slate-700 text-white rounded-3xl'>
                        {
                            subject.map(subjects => <option>{subjects.subject}</option>)
                        }
                    </select>
                </div>
            </div>



            <hr className='my-5' />

            <section>
                <p>মোট প্রশ্নঃ {question.length} টি</p>

                <div className='grid grid-cols-3 gap-5'>
                    {
                        question.map(questions => {
                            return (
                                <div className='p-5 rounded shadow-lg '>
                                    <h4>{index++})  {questions.question}</h4>
                                    <div>
                                        <p className={`${'a' === questions.ans ? 'text-green-500 font-extrabold' : ''}`}>ক) {questions.opA}</p>
                                        <p className={`${'b' === questions.ans ? 'text-green-500 font-extrabold' : ''}`}>খ) {questions.opB}</p>
                                        <p className={`${'c' === questions.ans ? 'text-green-500 font-extrabold' : ''}`}>গ) {questions.opC}</p>
                                        <p className={`${'d' === questions.ans ? 'text-green-500 font-extrabold' : ''}`}>ঘ) {questions.opD}</p>
                                        <button onClick={() => handleShowExplain(questions._id)} className='my-3 bg-slate-700 text-sm px-3 py-1 rounded-3xl shadow-2xl text-white'>ব্যাখ্যা</button> <button onClick={() => handleDeleteQuestion(questions._id)} className='my-3 bg-slate-700 text-sm px-3 py-[2px] rounded-3xl shadow-2xl text-white'><DeleteIcon className='p-1' ></DeleteIcon></button>
                                        <p className='hidden' id={questions._id}>{questions.explain}</p>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>



            {/* modal  */}
            <div class={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div>
                                    <p className='flex justify-start items-center gap-4'>বিষয়ভিত্তিক প্রশ্ন যোগ করুণ</p>
                                    <form onSubmit={handleAddQuestion} className='my-5'>
                                        <div className='grid grid-cols-3 gap-4 mb-2'>
                                            <select name="subject" className='p-2 border  block focus:outline-none w-full'>
                                                <option value="--টপিক নির্বাচন করুণ --">--বিষয় নির্বাচন করুণ --</option>
                                                {
                                                    subject.map(subjects => <option>{subjects.subject}</option>)
                                                }
                                            </select>
                                            <select name="topic" className='p-2 border  block focus:outline-none w-full'>
                                                <option value="--টপিক নির্বাচন করুণ --">--টপিক নির্বাচন করুণ --</option>
                                                {
                                                    topic.map(subjects => <option>{subjects.topic} </option>)
                                                }
                                            </select>
                                            <select name="subTopic" className='p-2 border  block focus:outline-none w-full'>
                                                <option value="--টপিক নির্বাচন করুণ --">--সাব টপিক নির্বাচন করুণ --</option>
                                                {
                                                    subTopic.map(subjects => <option >{subjects.subtopic} </option>)
                                                }
                                            </select>
                                        </div>
                                        <input type="text" name='question' placeholder='প্রশ্ন প্রবেশ করান' className='p-2 border  block focus:outline-none w-full' />
                                        <div className='my-4 grid grid-cols-2 gap-4'>
                                            <label className='flex items-center mt-2'>
                                                <p className='p-2 border  block focus:outline-none w-10'><span className='bg-black w-6 h-6  flex items-center justify-center rounded-full text-white'>ক</span></p> <input type="text" name='opA' className='p-2 border  block focus:outline-none w-full' placeholder='অপশন' />  <label onClick={() => setAns('a')} htmlFor='a' className='p-2 border  block focus:outline-none w-10 cursor-pointer'><input type="radio" name="ans" id='a' /></label>
                                            </label>
                                            <label className='flex items-center mt-2'>
                                                <p className='p-2 border  block focus:outline-none w-10'><span className='bg-black w-6 h-6  flex items-center justify-center rounded-full text-white'>খ</span></p> <input type="text" name='opB' className='p-2 border  block focus:outline-none w-full' placeholder='অপশন' /> <label onClick={() => setAns('b')} htmlFor='b' className='p-2 border  block focus:outline-none w-10 cursor-pointer'><input type="radio" name="ans" id='b' /></label>
                                            </label>
                                            <label className='flex items-center mt-2'>
                                                <p className='p-2 border  block focus:outline-none w-10'><span className='bg-black w-6 h-6  flex items-center justify-center rounded-full text-white'>গ</span></p> <input type="text" name='opC' className='p-2 border  block focus:outline-none w-full' placeholder='অপশন' /> <label onClick={() => setAns('c')} htmlFor='c' className='p-2 border  block focus:outline-none w-10 cursor-pointer'><input type="radio" name="ans" id='c' /></label>
                                            </label>
                                            <label className='flex items-center mt-2'>
                                                <p className='p-2 border  block focus:outline-none w-10'><span className='bg-black w-6 h-6  flex items-center justify-center rounded-full text-white'>ঘ</span></p> <input type="text" name='opD' className='p-2 border  block focus:outline-none w-full' placeholder='অপশন' /> <label onClick={() => setAns('d')} htmlFor='d' className='p-2 border  block focus:outline-none w-10 cursor-pointer'><input type="radio" name="ans" id='d' /></label>
                                            </label>
                                        </div>
                                        <p>Note : লাইন আলাদা করতে ব্যাকের পর " {'<br />'} "  ব্যাবহার করুণ । </p>
                                        <textarea name="explain" placeholder='ব্যাখ্যা করুণ' className='p-2 border  block focus:outline-none h-24 w-full'></textarea>
                                        <div className='flex justify-end items-center gap-5 mt-5'>
                                            <label onClick={() => setModal('hidden')} className='px-4 py-1 text-white uppercase rounded-sm bg-red-500 cursor-pointer'>Cancel</label>
                                            <button className='px-4 py-1 text-white uppercase rounded-sm bg-green-500'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadTopicaly;