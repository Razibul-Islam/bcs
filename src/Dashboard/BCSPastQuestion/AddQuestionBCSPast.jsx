import { KeyboardArrowLeft } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddQuestionBCSPast = () => {
    const [category, setCategory] = useState([])
    const [ans, setAns] = useState('');

    const handleAddQuestion = (e) => {
        e.preventDefault();
        const question = e.target.question.value;
        const category = e.target.category.value;
        const opA = e.target.opA.value;
        const opB = e.target.opB.value;
        const opC = e.target.opC.value;
        const opD = e.target.opD.value;
        const explain = e.target.explain.value;
        const question_id = 'pastbcsquestion101'
        const data = { question, opA, opB, opC, opD, explain, ans, question_id, category }
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
        fetch('http://localhost:5000/bcs-past-category-get')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <Link to="/dashboard/past-bcs-question" className='ml-5 text-xl font-semibold flex items-center' > <KeyboardArrowLeft /> Back previous page </Link>
            <div className='max-w-5xl mx-auto mt-10  px-5 md:px-0'>
                <p className='flex justify-start items-center gap-4'>বিগত বিসিএস প্রশ্ন যোগ করুণ</p>
                <form onSubmit={handleAddQuestion} className='my-5'>
                    <select name="category" className='p-2 border  block focus:outline-none w-full mb-4 md:mb-0'>
                        <option>--Select Category--</option>
                        {
                            category.map(cate => <option>{cate.category}</option>)
                        }
                    </select>
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
                    <textarea name="explain" placeholder='ব্যাখ্যা করুণ' className='p-2 border block focus:outline-none h-24 w-full'></textarea>
                    <div className='flex justify-end items-center gap-5 mt-5'>
                        <button className='px-4 py-1 text-white uppercase rounded-sm bg-green-500'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddQuestionBCSPast;