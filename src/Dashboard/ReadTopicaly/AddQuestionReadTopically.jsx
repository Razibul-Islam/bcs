import { KeyboardArrowLeft } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddQuestionReadTopically = () => {
    const [ans, setAns] = useState('');
    const [subject, setSubject] = useState([]);
    const [topic, setTopic] = useState([]);
    const [subTopic, setSubTopic] = useState([]);

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
        fetch('http://localhost:5000/add-question', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('প্রশ্ন যোগ করা হয়েছে');
                e.target.question.value = ""
                e.target.opA.value = ""
                e.target.opB.value = ""
                e.target.opC.value = ""
                e.target.opD.value = ""
                e.target.explain.value = ""
            })
    };

    useEffect(() => {
        const url = `http://localhost:5000/get-subject-read-topiclly`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSubject(data))
    }, [])
    useEffect(() => {
        const url = `http://localhost:5000/get-topic-read-topiclly`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTopic(data))
    }, [])
    useEffect(() => {
        const url = `http://localhost:5000/get-subtopic-read-topiclly`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSubTopic(data))
    }, [])

    return (
        <div>
            <Link to="/dashboard/read-topicaly" className='ml-5 text-xl font-semibold flex items-center' > <KeyboardArrowLeft /> Back previous page </Link>
            <div className='max-w-5xl mx-auto mt-10 px-5 md:px-0'>
                <p className='flex justify-start items-center gap-4'>বিষয়ভিত্তিক প্রশ্ন যোগ করুণ</p>
                <form onSubmit={handleAddQuestion} className='my-5'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-2'>
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
                    <div className='my-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
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
                        <button className='px-4 py-1 text-white uppercase rounded-sm bg-green-500'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddQuestionReadTopically;